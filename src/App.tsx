import { Post, Header, Sidebar } from './components';
import { getPostsMock } from './data/posts-mock';
import styles from './App.module.css';
import './global.css';

export const App = () => {
	const posts = getPostsMock();

	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((item) => (
						<Post
							key={item.id}
							id={item.id}
							author={item.author}
							content={item.content}
							publishedAt={item.publishedAt}
						/>
					))}
				</main>
			</div>
		</div>
	);
};
