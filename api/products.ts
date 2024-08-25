import { API } from "@/app/api";
import { ProductsModel, Product } from "@/interfaces/products.interface";

export async function getProducts(limit: number = 10, offset: number = 0): Promise<Product[]> {
  const url = `${API.products}?limit=${limit}&offset=${offset}`;
  const res = await fetch(url);

  if (!res.ok) {
    console.log("Ошибка");
    throw new Error("Ошибка загрузки товаров");
  }

  const allProducts: ProductsModel = await res.json();
  return allProducts.products; // Возвращаем массив продуктов
}
