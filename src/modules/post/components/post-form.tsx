import { usePostCreate } from "../hooks/use-post-create";

export function PostForm() {
	const { form, slug, handleChange, handleSubmit, isSubmitting, error } =
		usePostCreate();

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-6"
		>
			<div className="flex flex-col gap-1">
				<label htmlFor="title" className="font-medium text-gray-900 text-sm">
					Title
				</label>

				<input
					id="title"
					value={form.title}
					onChange={handleChange("title")}
					placeholder="My First Post"
					className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none sm:text-base"
				/>

				{slug && <p className="text-gray-500 text-xs">/{slug}</p>}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="excerpt" className="font-medium text-gray-900 text-sm">
					Excerpt
				</label>

				<textarea
					id="excerpt"
					value={form.excerpt}
					onChange={handleChange("excerpt")}
					rows={2}
					placeholder="A short summary."
					className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none sm:text-base"
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="content" className="font-medium text-gray-900 text-sm">
					Content
				</label>

				<textarea
					id="content"
					value={form.content}
					onChange={handleChange("content")}
					rows={6}
					placeholder="Write your post..."
					className="w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none sm:text-base"
				/>
			</div>

			{error && <p className="text-red-600 text-sm">{error}</p>}

			<button
				type="submit"
				disabled={isSubmitting}
				className="cursor-pointer rounded-md bg-black px-4 py-2 font-medium text-sm text-white transition hover:opacity-90 disabled:opacity-50 sm:w-auto sm:self-start sm:text-base"
			>
				{isSubmitting ? "Saving..." : "Save Post"}
			</button>
		</form>
	);
}
