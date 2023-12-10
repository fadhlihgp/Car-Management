import {Button} from "react-bootstrap";
import React from "react";
import {ButtonFilterProps} from "./ButtonFilterProps";

const ButtonFilter = ({text, variantColor, onClick}: ButtonFilterProps) => {
    return(
        <div>
            <Button variant={variantColor} size='sm' onClick={onClick}>{text}</Button>
        </div>
    )
}

export default ButtonFilter
