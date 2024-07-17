import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

import styles from './styles.module.css';

export const Post = ({ author, content, publishedAt }) => {
	const [newCommentText, setNewCommentText] = useState('');

	const [comments, setComments] = useState([
		{
			id: uuid(),
			author: {
				name: 'Outro Usuário',
				photo: '/photo-profile-2.svg',
			},
			content: 'Comentário de teste',
			publishedAt: new Date(),
		},
	]);

	const publishedDateFormatted = format(
		new Date(publishedAt),
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const handleNewCommentChange = () => {
		setNewCommentText(event.target.value);
	};

	const deleteComment = (commentId) => {
		console.log(`Deleting comment: ${commentId}`);
		const commentsAfterDeletingTheChosenOne = comments.filter(
			(comment) => comment.id !== commentId
		);
		setComments(commentsAfterDeletingTheChosenOne);
	};

	const handleCreateNewComment = () => {
		event.preventDefault();

		setComments([
			...comments,
			{
				id: uuid(),
				author: {
					name: 'Outro Usuário',
					photo: '/photo-profile-2.svg',
				},
				content: newCommentText,
				publishedAt: new Date(),
			},
		]);
		setNewCommentText('');
	};

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
			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
					placeholder='Deixe um comentário'
					value={newCommentText}
					onChange={handleNewCommentChange}
				/>
				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>
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
