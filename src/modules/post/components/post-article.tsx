interface PostArticleProps {
	id: number;
	title: string;
	excerpt: string;
	createdAt: string;
	onDelete: (id: number) => void;
	onEdit: (id: number) => void;
}

export default function PostArticle(props: PostArticleProps) {
	return (
		<article className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md sm:p-6">
			<p className="text-gray-500 text-xs tracking-wider">
				{new Date(props.createdAt)
					.toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					})
					.toUpperCase()}
			</p>

			<h2 className="font-semibold text-gray-900 text-lg sm:text-xl">
				{props.title}
			</h2>

			<p className="text-gray-600 text-sm leading-relaxed sm:text-base">
				{props.excerpt}
			</p>

			<div className="flex items-center justify-between gap-2 self-end">
				<button
					type="button"
					onClick={() => props.onEdit(props.id)}
					className="cursor-pointer rounded-lg bg-gray-50 px-3 py-1.5 font-medium text-gray-700 text-sm ring-1 ring-gray-100 hover:bg-gray-100"
				>
					Edit
				</button>

				<button
					onClick={() => props.onDelete(props.id)}
					type="button"
					className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-red-50 px-3 py-1.5 font-medium text-red-600 text-sm ring-1 ring-red-100 transition hover:bg-red-100 hover:text-red-700"
				>
					Delete
				</button>
			</div>
		</article>
	);
}
