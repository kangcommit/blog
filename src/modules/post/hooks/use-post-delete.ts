import { useRouter } from "@tanstack/react-router";
import { deletePost } from "../lib/delete-post";

export function usePostDelete() {
	const router = useRouter();

	async function handleDelete(id: number) {
		await deletePost(id);
		router.invalidate();
	}

	return { handleDelete };
}
