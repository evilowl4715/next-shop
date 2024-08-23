import styles from './MainPagination.module.css';
import { Pagination } from '@nextui-org/pagination';

export const MainPagination = () => {
	return (
		<Pagination
			disableCursorAnimation={true}
			isDisabled
			total={10}
			initialPage={1}
			classNames={{
				wrapper: [styles.paginationList],
				item: [styles.paginationItem]
			}}
		/>
	);
};
