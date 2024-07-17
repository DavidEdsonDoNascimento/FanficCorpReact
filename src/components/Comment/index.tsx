import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { useState } from 'react';
import { ICommentProps } from '../../interfaces/comments';
import {
	getPublishedDateFormatted,
	getPublishedDateRelativeToNow,
} from '../../utils/date-format';

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

	const publishedDateFormatted: string = getPublishedDateFormatted(publishedAt);
	const publishedDateRelativeToNow: string =
		getPublishedDateRelativeToNow(publishedAt);

	return (
		<div className={styles.comment}>
			<Avatar
				src={author?.photo?.toString() || ''}
				title={author?.name}
				hasBorder={false}
			/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>{author.name}</strong>
							<time
								title={publishedDateFormatted}
								dateTime={publishedAt.toISOString()}
							>
								{publishedDateRelativeToNow}
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
