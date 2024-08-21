import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NotificationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}