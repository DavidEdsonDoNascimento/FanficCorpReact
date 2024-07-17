import styles from './style.module.css';
import logo from './../../assets/logo.svg';

export const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt='Logo' />
			<strong>Fanfics Corp</strong>
		</header>
	);
};
