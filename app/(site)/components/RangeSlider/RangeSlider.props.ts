import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface RangeSliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    maxValue: number;
    minValue: number;
}