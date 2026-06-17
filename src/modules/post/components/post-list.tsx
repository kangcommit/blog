import type { Post } from "../types";
import PostArticle from "./post-article";

interface PostListProps {
	posts: Post[];
}

export function PostList({ posts }: PostListProps) {
	return (
		<div className="mx-auto mt-12 flex w-full max-w-2xl flex-col gap-10 px-4 sm:px-6">
			{posts.map((post) => (
				<PostArticle key={post.id} {...post} />
			))}
		</div>
	);
}
