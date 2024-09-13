import { Product } from "@/interfaces/products.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: Product;
}