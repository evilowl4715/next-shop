import type { Metadata } from 'next';
import styles from './page.module.css';
import { Products } from '../components/Products/Products';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const metadata: Metadata = {
	title: 'Каталог',
	description: 'Каталог товаров'
};

export default function Catalog() {
	return (
		<main className={styles.main}>
			<div className='container'>
				<div className='title'>
					<h1>Каталог товаров</h1>
				</div>
				<div className={styles.wrapper}>
					<Sidebar />
					<Products className={styles.products} />
				</div>
			</div>
		</main>
	);
}
