import type { PostResponse } from "../types";

export async function getPost(id: number): Promise<PostResponse> {
	const url = `http://localhost:8000/posts/${id}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();

		console.log("Data received:", data);
		return data;
	} catch (error) {
		console.error("Failed to fetch post:", error);
		throw error;
	}
}
