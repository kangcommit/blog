import type { PostResponse, UpdatePostInput } from "../types";

export async function updatePost(
	id: number,
	data: UpdatePostInput,
): Promise<PostResponse> {
	const url = `http://localhost:8000/posts/${id}`;

	try {
		const response = await fetch(url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const message = await response.text();
			throw new Error(`Update failed (${response.status}): ${message}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Failed to update post:", error);
		throw error;
	}
}
