import styles from './Products.module.css';
import { Card } from '../Card/Card';
// import { ProductsProps } from './Products.props';
import { Pagination } from '../Pagination/Pagination';
import { Product } from '@/interfaces/products.interface';

interface ProductsProps {
	products: Product[];
	totalProducts: number;
	currentPage: number;
	productsPerPage: number;
	noProductsMessage?: string;
}

export const Products = ({
	products,
	totalProducts,
	currentPage,
	productsPerPage,
	noProductsMessage
}: ProductsProps) => {
	if (products.length === 0) {
		return (
			<div className={styles.noProducts}>
				{noProductsMessage || 'Ничего не найдено'}
			</div>
		);
	}

	const totalPages = Math.ceil(totalProducts / productsPerPage);

	return (
		<div className={styles.products}>
			<div className={styles.list}>
				{products.map(p => (
					<Card className={styles.product} key={p.sku} product={p} />
				))}
			</div>
			<Pagination totalPages={totalPages} currentPage={currentPage} />
		</div>
	);
};
