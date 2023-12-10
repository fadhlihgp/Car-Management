import React from "react";

const iconStyle = {
    backgroundColor: '#cfd4ed',
    borderRadius: '100%',
    width: '24px',
    height: '24px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const Icon = () => {
    return <div className="circle" style={iconStyle}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13.3333 4L5.99996 11.3333L2.66663 8"
                stroke="#0D28A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
    </div>
}

export default Icon
