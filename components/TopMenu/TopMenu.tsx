import { TopMenuProps } from './TopMenu.props';
import styles from './TopMenu.module.css';

export const TopMenu = ({ className, ...props }: TopMenuProps) => {
	return (
		<div className={styles.menu} {...props}>
			<ul>
				<li>
					<a href='/about/'>Главная</a>
				</li>
				<li>
					<a href='/catalog/'>Магазин</a>
				</li>
				<li>
					<a href='/about/'>О нас</a>
				</li>
			</ul>
		</div>
	);
};
