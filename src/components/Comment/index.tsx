import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { useState } from 'react';
import { ICommentProps } from '../../interfaces/comments';

import styles from './styles.module.css';

export const Comment = ({
	id,
	author,
	content,
	publishedAt,
	onDeleteComment,
}: ICommentProps) => {
	const [likes, setLikes] = useState<number>(0);

	const handleDeleteComment = () => {
		onDeleteComment(id);
	};

	const handleNewLike = () => {
		setLikes((currentLikes) => currentLikes + 1);
	};

	return (
		<div className={styles.comment}>
			<Avatar src={author?.photo?.toString() || ''} hasBorder={false} />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>{author.name}</strong>
							<time title='11 de Maio às 08:13h' dateTime='2024-03-13 09:13:00'>
								Cerca de 1h atrás
							</time>
						</div>
						<button title='Deletar Comentário' onClick={handleDeleteComment}>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleNewLike}>
						<ThumbsUp />
						Aplaudir <span>{likes}</span>
					</button>
				</footer>
			</div>
		</div>
	);
};
