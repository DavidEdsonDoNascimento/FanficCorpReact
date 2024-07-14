/* eslint-disable react/prop-types */
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from '../Comment';
import styles from './styles.module.css';
import { Avatar } from '../Avatar';

export const Post = ({ author, content, publishedAt }) => {
	const publishedDateFormatted = format(
		new Date(publishedAt),
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	);

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
				<time title={publishedDateFormatted} dateTime={publishedAt}>
					{publishedDateFormatted.toString().replace(',', ' as ')}
				</time>
			</header>
			<div className={styles.content}>
				{content.map((item) => (
					<p key={item.id}>
						{item.type === 'link' ? (
							<a href='#'>👉 {item.content}</a>
						) : (
							item.content
						)}
					</p>
				))}
			</div>
			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder='Deixe um comentário' />
				<footer>
					<button type='submit'>Publicar</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
};
