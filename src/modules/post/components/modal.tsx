import type { ReactNode } from "react";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<button
				type="button"
				className="absolute inset-0 bg-black/40"
				onClick={onClose}
				aria-label="Close modal"
			/>

			<div className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-5 shadow-lg sm:p-6">
				<h2 className="mb-4 font-semibold text-gray-900 text-lg">Edit Post</h2>

				{children}
			</div>
		</div>
	);
}
