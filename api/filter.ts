import { API } from "@/app/api";
import { Category, FilterModel } from "@/interfaces/filter.interface";

export async function getFilters(maxPrice: number, minPrice:number): Promise<Category[]> {
  const url = `${API.filter}?maxPrice=${maxPrice}&minPrice=${minPrice}`;
  const res = await fetch(url);

  if (!res.ok) {
    console.log("Ошибка");
    throw new Error("Ошибка загрузки товаров");
  }

  const allFilters: FilterModel = await res.json();
  return allFilters.categories; // Возвращаем массив продуктов
}