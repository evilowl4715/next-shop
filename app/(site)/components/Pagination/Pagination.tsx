'use client';

import { useRouter } from 'next/navigation';
import styles from './Pagination.module.css';
import cn from 'classnames';

interface PaginationProps {
	totalPages: number;
	currentPage: number;
}

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
	const router = useRouter();

	const handlePageChange = (page: number) => {
		// Обновляем URL при смене страницы
		router.push(`?page=${page}`);
	};

	return (
		<div className={styles.pagination}>
			<ul className={styles.list}>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
					<li key={page} aria-label={`page ${page}`} className={styles.item}>
						<button
							className={cn(
								styles.btn,
								currentPage === page && styles.activePage
							)}
							onClick={() => handlePageChange(page)}
						>
							{page}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
