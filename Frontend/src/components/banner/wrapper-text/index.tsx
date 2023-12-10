import Title from "../title";
import Description from "../description";
import React from "react";
import {WrapperTextProps} from "./WrapperTextProps";

const WrapperText = ({children}: WrapperTextProps) => {
    return (
        <div>
            <Title />
            <Description />
            {children}
        </div>
    )
}
export default WrapperText;
