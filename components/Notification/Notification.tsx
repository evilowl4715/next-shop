import styles from './Notification.module.css';
import { NotificationProps } from './Notification.props';

export const Notification = ({
	children,
	className,
	...props
}: NotificationProps) => {
	return (
		<div className={styles.notification} {...props}>
			{children}
		</div>
	);
};
