import React from "react";
import "./ButtonStyle.css";
import {ButtonCustomProps} from "./ButtonCustomProps";

const ButtonCustom: React.FC<ButtonCustomProps> = ({ name = 'Klik Button', onClick, color = '#5cb85f', type = 'button' }) => {
    return (
        <button type={type} className={'btn-custom'} onClick={onClick} style={{ backgroundColor: color, borderRadius: '4px' }}>
            {name}
        </button>
    );
};

export default ButtonCustom;
