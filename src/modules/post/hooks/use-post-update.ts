import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { validatePostForm } from "../form/post-form-utils";
import { usePostFields } from "../form/use-post-fields";
import { updatePost } from "../lib/update-post";
import type { Post } from "../types";

export function usePostUpdate(initialData: Post) {
	const router = useRouter();

	const { form, slug, handleChange } = usePostFields({
		title: initialData.title ?? "",
		excerpt: initialData.excerpt ?? "",
		content: initialData.content ?? "",
	});

	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(null);

		const validationError = validatePostForm(form);
		if (validationError) {
			setError(validationError);
			return false;
		}

		try {
			setIsSubmitting(true);

			await updatePost(initialData.id, {
				...form,
				slug,
			});

			router.invalidate();
			return true;
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong");
			return false;
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
