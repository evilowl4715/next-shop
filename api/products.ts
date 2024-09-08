import { API } from "@/app/api";
import { ProductsModel, Product } from "@/interfaces/products.interface";

export async function getProducts(
  limit: number,
  offset: number,
  categoryId?: number,
  priceMin?: number,
  priceMax?: number
): Promise<{ products: Product[], totalProducts: number, minPrice: number, maxPrice: number }> {
  const url = new URL(`${API.products}?limit=${limit}&offset=${offset}`);

  if (categoryId) {
    url.searchParams.append('categoryId', categoryId.toString());
  }
  if (priceMin) {
    url.searchParams.append('priceMin', priceMin.toString());
  }
  if (priceMax) {
    url.searchParams.append('priceMax', priceMax.toString());
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    console.log("Ошибка");
    throw new Error("Ошибка загрузки товаров");
  }

  const allProducts: ProductsModel = await res.json();

  const prices = allProducts.products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    products: allProducts.products, 
    totalProducts: allProducts.totalProducts,
    minPrice,
    maxPrice,
  };
}