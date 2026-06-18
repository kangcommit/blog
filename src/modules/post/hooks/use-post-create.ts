import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { validatePostForm } from "../form/post-form-utils";
import { usePostFields } from "../form/use-post-fields";
import { createPost } from "../lib/create-post";
import type { PostFormFields } from "../types";

const initialValues: PostFormFields = {
	title: "",
	excerpt: "",
	content: "",
};

export function usePostCreate() {
	const router = useRouter();

	const { form, slug, handleChange, setForm } = usePostFields(initialValues);

	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(null);

		const validationError = validatePostForm(form);
		if (validationError) {
			setError(validationError);
			return;
		}

		try {
			setIsSubmitting(true);

			await createPost({
				...form,
				slug,
			});

			setForm(initialValues);
			router.invalidate();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong");
		} finally {
			setIsSubmitting(false);
		}
	}

	return {
		form,
		slug,
		handleChange,
		handleSubmit,
		error,
		isSubmitting,
	};
}
