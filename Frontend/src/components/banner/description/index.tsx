import React from "react";
import {DescriptionBannerProps} from "./DescriptionBannerProps";

const DescriptionStyle = {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '20px'
}
const Description = ({ text = "Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. " }: DescriptionBannerProps) => {
    return (
        <div className='w-75 mt-3'>
            <p style={DescriptionStyle}>{text}</p>
        </div>
    )
}
export default Description
