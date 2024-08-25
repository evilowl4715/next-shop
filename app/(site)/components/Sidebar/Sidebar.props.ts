import { Category } from '@/interfaces/filter.interface';

export interface SidebarProps {
    categories: Category[];
    minPrice: number;
    maxPrice: number;
    className?: string;
}