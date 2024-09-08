import styles from './page.module.css';
import { getProducts } from '@/api/products';
import { Products } from './components/Products/Products';
import { Silder } from './components/Silder/Silder';

var settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

export default async function Home() {
	const productsPerPage = 6; // Ограничиваем количество продуктов до 4
	const offset = 0;
	const categoryId = undefined; // Можно не фильтровать по категории
	const priceMin = undefined; // Без фильтрации по минимальной цене
	const priceMax = undefined; // Без фильтрации по максимальной цене

	const { products, totalProducts } = await getProducts(
		productsPerPage,
		offset,
		categoryId,
		priceMin,
		priceMax
	);

	return (
		<main className={styles.main}>
			<div className='container'>
				<Silder/>
				<div className={styles.products}>
					<h2>Последние поступления</h2>
					<Products
						products={products}
						totalProducts={totalProducts}
						currentPage={1}
						productsPerPage={productsPerPage}
						noProductsMessage='Ничего не найдено'
					/>
				</div>
			</div>
		</main>
	);
}
