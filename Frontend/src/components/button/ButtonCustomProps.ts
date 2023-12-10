import {ReactNode} from "react";

export interface ButtonCustomProps {
    name?: ReactNode;
    onClick?: () => void;
    color?: string;
    type?: "button" | "submit" | "reset";
}
