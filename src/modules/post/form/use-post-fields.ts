// hooks/use-post-fields.ts
import type React from "react";
import { useMemo, useState } from "react";
import type { PostFormFields } from "../types";
import { slugify } from "./post-form-utils";

export function usePostFields(initialValues: PostFormFields) {
	const [form, setForm] = useState(initialValues);

	const slug = useMemo(() => slugify(form.title), [form.title]);

	function handleChange(field: keyof PostFormFields) {
		return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setForm((prev) => ({
				...prev,
				[field]: e.target.value,
			}));
		};
	}

	return {
		form,
		setForm,
		slug,
		handleChange,
	};
}
