import { usePostDelete } from "../hooks/use-post-delete";
import { usePostEditorModal } from "../hooks/use-post-editor-modal";
import type { Post } from "../types";
import { EditPostForm } from "./edit-post-form";
import { Modal } from "./modal";
import PostCard from "./post-card";

interface PostListProps {
	posts: Post[];
}

export function PostList({ posts }: PostListProps) {
	const { handleDelete } = usePostDelete();

	const { selectedPost, openModal, closeModal } = usePostEditorModal();

	const isModalOpen = selectedPost !== null;

	return (
		<>
			<div className="mx-auto mt-12 flex w-full max-w-2xl flex-col gap-10 px-4 sm:px-6">
				{posts.map((post) => (
					<PostCard
						key={post.id}
						{...post}
						onDelete={handleDelete}
						onEdit={() => openModal(post)}
					/>
				))}
			</div>

			<Modal open={isModalOpen} onClose={closeModal}>
				{selectedPost && (
					<EditPostForm initialData={selectedPost} onClose={closeModal} />
				)}
			</Modal>
		</>
	);
}
