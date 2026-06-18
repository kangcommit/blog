import { usePostUpdate } from "../hooks/use-post-update";
import type { Post } from "../types";

interface Props {
	initialData: Post;
	onClose: () => void;
}

export function EditPostForm({ initialData, onClose }: Props) {
	const { form, slug, handleChange, handleSubmit, isSubmitting, error } =
		usePostUpdate(initialData);

	async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		const success = await handleSubmit(e);
		if (success) {
			onClose();
		}
	}

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-4">
			{error && (
				<div className="rounded-md bg-red-50 px-3 py-2 text-red-600 text-sm">
					{error}
				</div>
			)}

			<div className="flex flex-col gap-1">
				<label htmlFor="title" className="font-medium text-sm">
					Title
				</label>
				<input
					id="title"
					value={form.title}
					onChange={handleChange("title")}
					className="w-full rounded-md border px-3 py-2 text-sm"
				/>
				{slug && <p className="text-gray-500 text-xs">/{slug}</p>}
			</div>

			<div>
				<label htmlFor="excerpt" className="font-medium text-sm">
					Excerpt
				</label>
				<textarea
					id="excerpt"
					value={form.excerpt}
					onChange={handleChange("excerpt")}
					className="w-full rounded-md border px-3 py-2 text-sm"
					rows={2}
				/>
			</div>

			<div>
				<label htmlFor="content" className="font-medium text-sm">
					Content
				</label>
				<textarea
					id="content"
					value={form.content}
					onChange={handleChange("content")}
					className="w-full rounded-md border px-3 py-2 text-sm"
					rows={5}
				/>
			</div>

			<div className="flex justify-end gap-2">
				<button
					type="button"
					onClick={onClose}
					className="cursor-pointer rounded-md bg-gray-100 px-4 py-2 text-sm"
				>
					Cancel
				</button>

				<button
					type="submit"
					disabled={isSubmitting}
					className="cursor-pointer rounded-md bg-black px-4 py-2 text-sm text-white disabled:opacity-50"
				>
					{isSubmitting ? "Saving..." : "Save Changes"}
				</button>
			</div>
		</form>
	);
}
