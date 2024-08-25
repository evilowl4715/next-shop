import { Product} from "@/interfaces/products.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface ProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    produts:  Product[]
}