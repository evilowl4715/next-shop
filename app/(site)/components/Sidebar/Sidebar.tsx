import { MainSelect } from '../Select/MainSelect';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import { RangeSlider } from '../RangeSlider/RangeSlider';
import { MainSwitch } from '../Switch/MainSwitch';
import { Search } from '../Search/Search';

export function Sidebar({ className, categories, minPrice, maxPrice, ...props }: SidebarProps) {
	return (
		<aside className={styles.sidebar} {...props}>
			<div className={styles.filter}>
				<Search/>
				<MainSelect category={categories} />
				<RangeSlider maxValue={maxPrice} minValue={minPrice} />
				<MainSwitch/>
			</div>
		</aside>	
	);
}
