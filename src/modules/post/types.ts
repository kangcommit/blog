export interface PostResponse {
	message: string;
	data: Post;
}

export interface PostsResponse {
	message: string;
	data: Post[];
}

export interface Post {
	id: number;
	title: string;
	content: string;
	excerpt: string;
	status: string;
	createdAt: string;
}

export interface CreatePostInput {
	title: string;
	slug: string;
	content: string;
	excerpt: string;
}

export type UpdatePostInput = Partial<CreatePostInput>;

export type PostFormFields = {
	title: string;
	excerpt: string;
	content: string;
};
