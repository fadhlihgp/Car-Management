import menu from "../../../../resources/fi_menu.png"
import React from "react";
import {HamburgerProps} from "./HamburgerProps";
const btnStyle = {
    border: 'none',
    background:'transparent',
    marginLeft: '25%'
}
const Hamburger = ({handleOnClick}: HamburgerProps) => {
    return (
        <button onClick={handleOnClick} style={btnStyle}><img src={menu}/></button>
    )
}
export default Hamburger
