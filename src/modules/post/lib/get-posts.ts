import type { PostsResponse } from "../types";

export async function getPosts(): Promise<PostsResponse> {
	const url = "http://localhost:8000/posts";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		throw error;
	}
}
