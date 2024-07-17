import styles from './styles.module.css';

interface IAuthorProps {
	src: string;
	hasBorder?: boolean;
}

export const Avatar = ({ src, hasBorder = true }: IAuthorProps) => {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={src}
		/>
	);
};
