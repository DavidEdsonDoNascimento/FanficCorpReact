import { Comment } from '../Comment';
import styles from './styles.module.css';
import { Avatar } from '../Avatar';

// eslint-disable-next-line react/prop-types
export const Post = ({ author, content, photo }) => {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={photo} />
					<div className={styles.authorInfo}>
						<strong>{author}</strong>
						<span>Consultora de negócios</span>
					</div>
				</div>
				<time title='11 de março às 08:49h' dateTime='2024-03-11 08:49:33'>
					Publicado há 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>{content}</p>
				<p>
					👉 <a href=''>jane.design/doctorcare</a>
				</p>
				<p>
					<a href=''>#novoprojeto</a> <a href=''>#nlw</a>{' '}
					<a href=''>#rocketseat</a>{' '}
				</p>
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
