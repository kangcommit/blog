import { createFileRoute } from "@tanstack/react-router";
import { PostDetail } from "#/modules/post/components/post-detail";
import { getPost } from "#/modules/post/lib/get-post";

export const Route = createFileRoute("/$id")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const id = Number(params.id);
		return getPost(id);
	},
});

function RouteComponent() {
	const post = Route.useLoaderData();

	return <PostDetail {...post.data} />;
}
