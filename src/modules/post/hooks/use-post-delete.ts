import { useRouter } from "@tanstack/react-router";
import { deletePost } from "../lib/delete-post";

export function usePostDelete() {
	const router = useRouter();

	const handleDelete = async (id: number) => {
		await deletePost(String(id));
		router.invalidate();
	};

	return { handleDelete };
}
