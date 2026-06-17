import { createFileRoute } from "@tanstack/react-router";
import { PostForm } from "#/modules/post/components/post-form";
import { PostList } from "#/modules/post/components/post-list";
import { getPosts } from "#/modules/post/lib/get-posts";

export const Route = createFileRoute("/")({
	component: Home,
	loader: getPosts,
});

function Home() {
	const posts = Route.useLoaderData();

	return (
		<>
			<PostForm />
			<PostList posts={posts.data} />
		</>
	);
}
