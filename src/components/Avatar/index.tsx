import styles from './styles.module.css';
import { ImgHTMLAttributes } from 'react';

interface IAuthorProps extends ImgHTMLAttributes<HTMLImageElement> {
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
