import { Metadata } from 'next';
import styles from './page.module.css';
import { Products } from '../components/Products/Products';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { FilterModel } from '@/interfaces/filter.interface';
import { getFilters } from '@/api/filter';
import { getProducts } from '@/api/products';

export const metadata: Metadata = {
	title: 'Каталог',
	description: 'Каталог товаров'
};

export default async function Page({
	searchParams
}: {
	searchParams: { categoryId?: string; priceMin?: string; priceMax?: string };
}) {
	const categoryId = searchParams.categoryId
		? parseInt(searchParams.categoryId)
		: undefined;
	const priceMin = searchParams.priceMin
		? parseInt(searchParams.priceMin)
		: undefined;
	const priceMax = searchParams.priceMax
		? parseInt(searchParams.priceMax)
		: undefined;

	const filterData: FilterModel = await getFilters(
		priceMax ?? 100,
		priceMin ?? 0
	);
	const { products, minPrice, maxPrice } = await getProducts(
		24,
		0,
		categoryId,
		priceMin,
		priceMax
	);

	return (
		<main className={styles.main}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Sidebar
						categories={filterData.categories}
						minPrice={minPrice}
						maxPrice={maxPrice}
					/>
					<Products products={products} noProductsMessage="Ничего не найдено"  />
				</div>
			</div>
		</main>
	);
}
