export async function deletePost(id: string) {
	const url = `http://localhost:8000/posts/${id}`;

	try {
		const response = await fetch(url, { method: "DELETE" });

		if (!response.ok) {
			const message = await response.text();
			throw new Error(`Delete failed (${response.status}): ${message}`);
		}

		if (response.status === 204) {
			return null;
		}

		return await response.json();
	} catch (error) {
		console.error("Failed to delete post:", error);
		throw error;
	}
}
