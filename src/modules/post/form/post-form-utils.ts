export function slugify(value: string) {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}

export type PostFormFields = {
	title: string;
	excerpt: string;
	content: string;
};

export function validatePostForm(form: PostFormFields) {
	const missingFields: string[] = [];

	if (!form.title.trim()) missingFields.push("Title");
	if (!form.excerpt.trim()) missingFields.push("Excerpt");
	if (!form.content.trim()) missingFields.push("Content");

	if (missingFields.length > 0) {
		return `${missingFields.join(", ")} ${
			missingFields.length === 1 ? "is" : "are"
		} required.`;
	}

	return null;
}
