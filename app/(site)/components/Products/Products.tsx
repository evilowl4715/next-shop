import { getProducts } from '@/api/products';
import styles from './Products.module.css';
import { Card } from '../Card/Card';
import { Product } from '@/interfaces/products.interface';
import { ProductsProps } from './Products.props';

export async function Products({ products, noProductsMessage, className, ...props }: ProductsProps) {
	if (products.length === 0) {
		return <div className={styles.noProducts}>{noProductsMessage || 'Ничего не найдено'}</div>;
	  }
	return (
		<div className={styles.list} {...props}>
			{products.map(p => (
				<Card className={styles.product} key={p.sku} product={p} />
			))}
		</div>
	);
}
