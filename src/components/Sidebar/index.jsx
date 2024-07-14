import styles from './styles.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

export const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<img className={styles.cover} src='/background-profile.svg' />

			<div className={styles.profile}>
				<Avatar src='/photo-profile-3.svg' />

				<strong>Ameenda Silva</strong>
				<span>Consultora de negócios</span>
			</div>

			<footer>
				<a href='#'>
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
};
