import { useRouter } from "@tanstack/react-router";
import type React from "react";
import { useMemo, useState } from "react";
import { createPost } from "../lib/create-post";
import type { CreatePostInput } from "../types";

type FormFields = Omit<CreatePostInput, "slug">;

const initialState: FormFields = {
	title: "",
	content: "",
	excerpt: "",
};

function slugify(value: string) {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}

export function usePostForm() {
	const router = useRouter();
	const [form, setForm] = useState<FormFields>(initialState);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const slug = useMemo(() => slugify(form.title), [form.title]);

	function handleChange(field: keyof FormFields) {
		return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setForm((prev) => ({ ...prev, [field]: e.target.value }));
		};
	}

	async function handleSubmit(e: React.SubmitEvent) {
		e.preventDefault();
		setError(null);

		const missingFields: string[] = [];

		if (!form.title.trim()) {
			missingFields.push("Title");
		}
		if (!form.excerpt.trim()) {
			missingFields.push("Excerpt");
		}
		if (!form.content.trim()) {
			missingFields.push("Content");
		}

		if (missingFields.length > 0) {
			const message = `${missingFields.join(", ")} ${
				missingFields.length === 1 ? "is" : "are"
			} required.`;
			setError(message);
			return;
		}

		setIsSubmitting(true);
		try {
			await createPost({ ...form, slug });
			setForm(initialState);
			router.invalidate();
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("Something went wrong while saving the post.");
			}
		} finally {
			setIsSubmitting(false);
		}
	}

	return { form, slug, handleChange, handleSubmit, isSubmitting, error };
}
