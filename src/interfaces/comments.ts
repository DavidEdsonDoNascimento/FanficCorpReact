import { IAuthor } from './authors';

interface IComment {
	id: string;
	author: IAuthor;
	content: string;
	publishedAt: Date;
}

interface ICommentProps {
	id: string;
	author: IAuthor;
	content: string;
	publishedAt: Date;
	onDeleteComment: (commentId: string) => void;
}

export type { IComment, ICommentProps };
