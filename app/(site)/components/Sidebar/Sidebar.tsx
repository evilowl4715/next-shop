import { Category } from '@/interfaces/filter.interface';
import { MainSelect } from '../Select/MainSelect'
import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props'
import { getFilters } from '@/api/filter';

export async function Sidebar({className, ...props}:SidebarProps) {
    const minPrice = 24;
	const maxPrice = 0;

	const category: Category[] = await getFilters(minPrice, maxPrice);
    return (
        <aside className={styles.sidebar} {...props}>
            <MainSelect category={category}/>
        </aside>
    )
}