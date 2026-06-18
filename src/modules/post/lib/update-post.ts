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
			// Try to get the message from the server's JSON response
			const errorData = await response.json().catch(() => ({}));

			// Throw the specific server message or fallback to status text
			throw new Error(
				errorData.message || `Response status: ${response.status}`,
			);
		}

		return await response.json();
	} catch (error) {
		console.error("Failed to update post:", error);
		throw error;
	}
}
