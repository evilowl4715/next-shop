'use client';

import styles from './Pagination.module.css';
import { usePagination, PaginationItemType } from '@nextui-org/pagination';
import cn from 'classnames';

export const Pagination = () => {
	const { activePage, range, setPage } = usePagination({
		total: 10,
	});

	return (
		<div className={styles.pagination}>
			<p>Active page: {activePage}</p>
			<ul className={styles.list}>
				{range.map(page => {
					if (typeof page === 'number') {
						return (
							<li
								key={page}
								aria-label={`page ${page}`}
								className={styles.item}
							>
								<button
									className={cn(
										styles.btn,
										activePage === page && styles.activePage
									)}
									onClick={() => setPage(page)}
								>
									{page}
								</button>
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
};
