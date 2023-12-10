import {ReactNode} from "react";

interface BreadcrumbPath {
    text: string
    link: string
}
export interface MainContainerProps {
    breadcrumpPaths: BreadcrumbPath[],
    title:string,
    children: ReactNode,
    childrenTitle?: any
}
