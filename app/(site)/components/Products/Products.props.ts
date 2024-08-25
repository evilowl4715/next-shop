import { Product } from '@/interfaces/products.interface';

export interface ProductsProps {
    products: Product[];
    className?: string;
    noProductsMessage?: string;
}