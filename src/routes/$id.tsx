import { createFileRoute } from "@tanstack/react-router";
import { PostDetail } from "#/modules/post/components/post-detail";
import { api } from "#/utils/api";

export const Route = createFileRoute("/$id")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const response = await api.posts[":id"].$get({
			param: {
				id: params.id,
			},
		});
		const data = await response.json();

		if (!data.success) {
			throw new Error(data.message);
		}

		return data;
	},
});

function RouteComponent() {
	const post = Route.useLoaderData();

	return <PostDetail {...post.data} />;
}
