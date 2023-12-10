import CtaContent from "../content";
import React from "react";

const ctaStyle = {
    margin: 'auto',
    borderRadius: '13px',
    background: 'var(--primary-dark-blue-04, #0d28a6)',
    color: 'white',
    padding: '70px 0'
}

const CtaWrapper = () => {
    return (
        <div style={ctaStyle} className='d-flex flex-column align-items-center justify-content-center w-75 my-5'>
            <CtaContent />
        </div>
    )
}

export default CtaWrapper;
