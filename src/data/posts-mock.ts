import { IPost } from './../interfaces/posts';

export const getPostsMock = (): IPost[] => {
	return [
		{
			id: '1',
			author: {
				id: '1',
				name: 'Ameenda Silva',
				photo: '/photo-profile-1.svg',
				role: 'Diretora de marketing',
			},
			content: [
				{ type: 'paragraph', content: 'Fala galeraa 👋' },
				{
					type: 'paragraph',
					content:
						'Fui promovida a ser parte da familia da empresa no meu primeiro dia, pra quem trabalha em uma empresa como essa nunca fica cansada.',
				},
				{ type: 'link', content: 'jane.design/doctorcare' },
			],
			publishedAt: new Date('2024-03-11 08:49:33'),
		},
		{
			id: '2',
			author: {
				id: '2',
				name: 'Bieenca Abravanel',
				photo: '/photo-profile-2.svg',
				role: 'Gestor de projetos',
			},
			content: [
				{ type: 'paragraph', content: 'Oi pessoal 😔' },
				{
					type: 'paragraph',
					content:
						'É com pesar que venho dizer que fui desligada após um repasse meu de cerca de 2 anos de trabalho a minha equipe.',
				},
				{ type: 'link', content: 'bieenca.projetos/enterprise' },
			],
			publishedAt: new Date('2024-03-15 08:49:33'),
		},
	];
};
