import { useRouter } from "@tanstack/react-router";
import { api } from "#/utils/api";

export function usePostDelete() {
	const router = useRouter();

	async function handleDelete(id: number) {
		await api.posts[":id"].$delete({
			param: {
				id: String(id),
			},
		});
		router.invalidate();
	}

	return { handleDelete };
}
