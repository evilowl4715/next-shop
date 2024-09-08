import { Metadata } from 'next';
import styles from './page.module.css';
import { Products } from '../components/Products/Products';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { FilterModel } from '@/interfaces/filter.interface';
import { getFilters } from '@/api/filter';
import { getProducts } from '@/api/products';
import { Pagination } from '../components/Pagination/Pagination';

export const metadata: Metadata = {
	title: 'Каталог',
	description: 'Каталог товаров'
};

export default async function Page({
	searchParams
}: {
	searchParams: {
		categoryId?: string;
		priceMin?: string;
		priceMax?: string;
		page?: string;
		discounted?: string;
		name?: string;
	};
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

	const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
	const productsPerPage = 6;
	const offset = (currentPage - 1) * productsPerPage;

	const discounted = searchParams.discounted === 'true';
	const searchName = searchParams.name || '';

	const filterData: FilterModel = await getFilters(
		priceMax ?? 100,
		priceMin ?? 0
	);
	const { products, totalProducts } = await getProducts(
		productsPerPage,
		offset,
		categoryId,
		priceMin,
		priceMax
	);

	let filteredProducts = products;

	if (discounted) {
		filteredProducts = filteredProducts.filter(
			product => product.discount !== undefined
		);
	}

	// Фильтр по названию
	if (searchName) {
		filteredProducts = filteredProducts.filter(product =>
			product.name.toLowerCase().includes(searchName.toLowerCase())
		);
	}

	const totalPages = Math.ceil(totalProducts / productsPerPage);

	return (
		<main className={styles.main}>
			<div className='container'>
				<div className={styles.wrapper}>
					<Sidebar
						categories={filterData.categories}
						minPrice={filterData.minPrice}
						maxPrice={filterData.maxPrice}
					/>
					<div className={styles.products}>
						<Products
							products={filteredProducts}
							totalProducts={
								discounted ? filteredProducts.length : totalProducts
							}
							currentPage={currentPage}
							productsPerPage={productsPerPage}
							noProductsMessage='Ничего не найдено'
						/>

						<Pagination totalPages={totalPages} currentPage={currentPage} />
					</div>
				</div>
			</div>
		</main>
	);
}
