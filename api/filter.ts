import { API } from "@/app/api";
import { FilterModel } from "@/interfaces/filter.interface";

export async function getFilters(maxPrice: number, minPrice: number): Promise<FilterModel> {
  const url = `${API.filter}?maxPrice=${maxPrice}&minPrice=${minPrice}`;
  const res = await fetch(url);

  if (!res.ok) {
    console.log("Ошибка");
    throw new Error("Ошибка загрузки товаров");
  }

  const data: FilterModel = await res.json();
  return data;
}