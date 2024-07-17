import { IAuthor } from './authors';

interface IPost {
	id: string;
	author: IAuthor;
	content: IPostContent[];
	publishedAt: Date;
}

interface IPostContent {
	type: 'paragraph' | 'link';
	content: string;
}

export type { IPost };
