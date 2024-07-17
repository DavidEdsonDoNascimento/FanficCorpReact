import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { IComment, IPost } from '../../interfaces';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';
import { v4 as uuid } from 'uuid';
import {
	getPublishedDateFormatted,
	getPublishedDateRelativeToNow,
} from '../../utils/date-format';

import styles from './styles.module.css';

export const Post = ({ author, content, publishedAt }: IPost) => {
	const [newCommentText, setNewCommentText] = useState<string>('');
	const [comments, setComments] = useState<Array<IComment>>([
		{
			id: uuid(),
			author: {
				id: uuid(),
				name: 'Outro Usuário',
				photo: '/photo-profile-2.svg',
				role: 'Gestor de projetos',
			},
			content: 'Comentário de teste',
			publishedAt: new Date(),
		},
	]);

	const publishedDateFormatted: string = getPublishedDateFormatted(publishedAt);
	const publishedDateRelativeToNow: string =
		getPublishedDateRelativeToNow(publishedAt);

	const handleNewCommentInvalid = (
		event: InvalidEvent<HTMLTextAreaElement>
	) => {
		event.target.setCustomValidity('Campo obrigatório');
	};
	const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	};

	const deleteComment = (commentId: string) => {
		console.log(`Deleting comment: ${commentId}`);
		const commentsAfterDeletingTheChosenOne = comments.filter(
			(comment) => comment.id !== commentId
		);
		setComments(commentsAfterDeletingTheChosenOne);
	};

	const handleCreateNewComment = (event: FormEvent) => {
		event.preventDefault();

		setComments([
			...comments,
			{
				id: uuid(),
				author: {
					id: uuid(),
					name: 'Outro Usuário',
					photo: '/photo-profile-2.svg',
					role: 'Gestor de projetos',
				},
				content: newCommentText,
				publishedAt: new Date(),
			},
		]);

		setNewCommentText('');
	};

	const isNewCommentEmpty: boolean = !newCommentText;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.photo} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>
			{/* Post Content */}
			<div className={styles.content}>
				{content.map((item) => (
					<p key={uuid()}>
						{item.type === 'link' ? (
							<a href='#'>👉 {item.content}</a>
						) : (
							item.content
						)}
					</p>
				))}
			</div>
			{/* Form Comment */}
			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
					placeholder='Deixe um comentário'
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>
				{/* Button Publish */}
				<footer>
					<button type='submit' disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>
			{/* Comment List */}
			<div className={styles.commentList}>
				{comments.map((item) => (
					<Comment
						key={item.id}
						id={item.id}
						author={item.author}
						content={item.content}
						publishedAt={item.publishedAt}
						onDeleteComment={deleteComment}
					/>
				))}
			</div>
		</article>
	);
};
