import { useState } from "react";
import type { Post } from "../types";

export function usePostEditorModal() {
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);

	function openModal(post: Post) {
		setSelectedPost(post);
	}

	function closeModal() {
		setSelectedPost(null);
	}

	return {
		selectedPost,
		openModal,
		closeModal,
	};
}
