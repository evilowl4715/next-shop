import { FilterModel } from '@/interfaces/filter.interface';
import { MainSelect } from '../Select/MainSelect';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import { getFilters } from '@/api/filter';
import { RangeSlider } from '../RangeSlider/RangeSlider';

export async function Sidebar({ className, ...props }: SidebarProps) {
	const filterData: FilterModel = await getFilters(0, 100);
	const { categories, minPrice, maxPrice } = filterData;
	return (
		<aside className={styles.sidebar} {...props}>
			<div className={styles.filter}>
				<MainSelect category={categories} />
				<RangeSlider maxValue={maxPrice} minValue={minPrice} />
			</div>
		</aside>
	);
}
