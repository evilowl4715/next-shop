import { getProducts } from '@/api/products';
import styles from './Products.module.css';
import { Card } from '../Card/Card';
import { Product } from '@/interfaces/products.interface';
import { ProductsProps } from './Products.props';

export async function Products({ className, ...props }: ProductsProps) {
	const limit = 24;
	const offset = 0;

	const products: Product[] = await getProducts(limit, offset);

	return (
		<div className={styles.list} {...props}>
			{products.map(p => (
				<Card className={styles.product} key={p.sku} product={p} />
			))}
		</div>
	);
}
