import { MainSelect } from '../Select/MainSelect';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import { RangeSlider } from '../RangeSlider/RangeSlider';

export function Sidebar({ className, categories, minPrice, maxPrice, ...props }: SidebarProps) {
	return (
		<aside className={styles.sidebar} {...props}>
			<div className={styles.filter}>
				<MainSelect category={categories} />
				<RangeSlider maxValue={maxPrice} minValue={minPrice} />
			</div>
		</aside>	
	);
}
