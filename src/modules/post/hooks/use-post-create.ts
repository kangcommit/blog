import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { api } from "#/utils/api";
import { validatePostForm } from "../form/post-form-utils";
import { usePostFields } from "../form/use-post-fields";
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

			const response = await api.posts.$post({
				json: {
					title: form.title,
					excerpt: form.excerpt,
					content: form.content,
					slug,
				},
			});

			if (!response.ok) {
				const errorData = await response.json();

				if ("message" in errorData) {
					throw new Error(errorData.message);
				}
			}

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
