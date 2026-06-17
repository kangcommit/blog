import type { CreatePostInput, PostResponse } from "../types";

export async function createPost(
	input: CreatePostInput,
): Promise<PostResponse> {
	const url = "http://localhost:8000/posts";

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(input),
		});

		if (!response.ok) {
			// Try to get the message from the server's JSON response
			const errorData = await response.json().catch(() => ({}));

			// Throw the specific server message or fallback to status text
			throw new Error(
				errorData.message || `Response status: ${response.status}`,
			);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to create post:", error);
		throw error;
	}
}
