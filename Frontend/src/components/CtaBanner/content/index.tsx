import ButtonCustom from "../../button";
import React from "react";
const h1Style: React.CSSProperties = {
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '150%'
}

const CtaContent = () => {
    return (
        <div className='d-flex flex-column w-100 align-items-center'>
            <h1 style={h1Style}>Sewa Mobil di Bekasi Sekarang</h1>
            <p style={{textAlign: "center", marginBottom: '50px',  }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonCustom name="Mulai Sewa Mobil"/>
        </div>
    )
}

export default CtaContent;
