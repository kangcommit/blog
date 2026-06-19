import { createFileRoute } from "@tanstack/react-router";
import { PostForm } from "#/modules/post/components/post-form";
import { PostList } from "#/modules/post/components/post-list";
import { api } from "#/utils/api";

export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => {
		const response = await api.posts.$get();
		const data = response.json();
		return data;
	},
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
