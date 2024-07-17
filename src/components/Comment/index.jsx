/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';
import { Avatar } from '../Avatar';
import { useState } from 'react';

export const Comment = ({
	id,
	author,
	content,
	publishedAt,
	onDeleteComment,
}) => {
	const [likes, setLikes] = useState(0);

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
