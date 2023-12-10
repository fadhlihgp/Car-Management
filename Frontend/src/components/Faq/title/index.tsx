import React from "react";

const h2Style = {
    fontSize: '24px',
fontStyle: 'normal',
fontWeight: '700',
lineHeight: '36px', /* 150% */
}
const FaqTitle = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2 style={h2Style}>Frequently Asked Question</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    )
}

export default FaqTitle;
