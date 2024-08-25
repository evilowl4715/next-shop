import { getProducts } from "@/api/products";
import styles from './Products.module.css';
import { Card } from "../Card/Card";
import { Product } from "@/interfaces/products.interface";

export async function Products() {
  // Задайте значения для limit и offset или получите их каким-то образом
  const limit = 10;
  const offset = 0;
  
  // Получите продукты с использованием функции getProducts
  const products: Product[] = await getProducts(limit, offset);

  return (
    <div className={styles.products}>
      {products.map((p) => (
        <Card className={styles.product} key={p.sku} product={p}/>
      ))}
    </div>
  );
}