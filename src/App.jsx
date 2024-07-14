import { Post, Header, Sidebar } from './components';
import styles from './App.module.css';
import './global.css';

export const App = () => {
	const contents = [
		{
			id: '1',
			author: 'Ameenda Silva',
			content:
				'Fui promovida a ser parte da familia da empresa no meu primeiro dia, pra quem trabalha em uma empresa como essa nunca fica cansada.',
			photo: '/imagem-gerada-no-gpt.jpeg',
		},
		{
			id: '2',
			author: 'Bieenca',
			content:
				'É com pesar que venho dizer que fui desligada após um repasse meu de cerca de 2 anos de trabalho a minha equipe.',
			photo: '/imagem-gerada-no-gpt-2.jpeg',
		},
		{
			id: '3',
			author: 'Rooobso',
			content:
				'Hoje tive de dispensar um colaborador, foi uma situação tensa, mas necessária.',
			photo: '/imagem-gerada-no-gpt-3.jpeg',
		},
	];

	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{contents.map((item) => (
						<Post
							key={item.id}
							author={item.author}
							content={item.content}
							photo={item.photo}
						/>
					))}
				</main>
			</div>
		</div>
	);
};
