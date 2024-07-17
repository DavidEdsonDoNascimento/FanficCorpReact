import styles from './styles.module.css';
import { ImgHTMLAttributes } from 'react';

interface IAuthorProps extends ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...props }: IAuthorProps) => {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			{...props}
		/>
	);
};
