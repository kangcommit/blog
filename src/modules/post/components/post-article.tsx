interface PostArticleProps {
	title: string;
	excerpt: string;
	createdAt: string;
}

export default function PostArticle(props: PostArticleProps) {
	return (
		<article className="flex flex-col gap-2 rounded-xl bg-gray-100 p-4 sm:p-6">
			<p className="text-black text-xs sm:text-sm">
				<p className="text-black text-sm">
					{new Date(props.createdAt)
						.toLocaleDateString("en-US", {
							month: "long",
							day: "numeric",
							year: "numeric",
						})
						.toUpperCase()}
				</p>
			</p>
			<h2 className="font-bold text-[#141414] text-xl sm:text-2xl">
				{props.title}
			</h2>
			<p className="text-justify text-[#505050] text-sm sm:text-base">
				{props.excerpt}
			</p>
		</article>
	);
}
