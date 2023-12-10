import PackageDetail from "../PackageDetail";
import OtherDetail from "../OtherDetail";
import React from "react";

const descriptionStyle = {
    padding: '25px',
    borderRadius: '8px',
    margin: '0 5px',
    boxShadow: '0px 0px 4px 0px #00000026',
}
const CardDetailDescriptionWrapper = () => {
    return (
        <div style={descriptionStyle}>
            <PackageDetail />
            <br/>
            <OtherDetail />
        </div>
    )
}

export default CardDetailDescriptionWrapper
