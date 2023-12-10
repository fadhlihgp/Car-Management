import React from "react";
import {TitleProps} from "./TitleProps";

const titleStyle = {
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '150%'
}
const Title = ({ text = "Sewa & Rental Mobil Terbaik di kawasan Bekasi" }: TitleProps) => {
    return (
        <h1 style={titleStyle}>{text}</h1>
    )
}
export default Title;
