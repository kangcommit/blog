import type { Post } from "../types";
import { formatPostDate } from "../utils/date";

export function PostDetail(props: Post) {
	return (
		<div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
			<article className="flex flex-col gap-6">
				<header className="flex flex-col gap-3">
					<p className="font-medium text-gray-500 text-xs tracking-widest">
						{formatPostDate(props.createdAt)}
					</p>

					<h1 className="font-semibold text-2xl text-gray-900 leading-tight sm:text-4xl">
						{props.title}
					</h1>

					<div className="h-px w-full bg-gray-100" />
				</header>

				<section className="prose prose-gray sm:prose-lg max-w-none">
					<p className="whitespace text-justify text-gray-700 leading-relaxed">
						{props.content}
					</p>
				</section>

				<footer className="mt-4 flex items-center justify-between">
					<button
						onClick={() => window.history.back()}
						type="button"
						className="rounded-lg bg-gray-50 px-4 py-2 font-medium text-gray-700 text-sm ring-1 ring-gray-100 hover:bg-gray-100"
					>
						← Back
					</button>

					<div className="text-gray-400 text-xs">Post ID: {props.id}</div>
				</footer>
			</article>
		</div>
	);
}
