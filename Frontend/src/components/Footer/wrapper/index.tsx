import Card1 from "../card1";
import Card2 from "../card2";
import Card3 from "../card3";
import Card4 from "../card4";
import React from "react";

const FooterWrapper = () => {
    return <div className='d-flex justify-content-center mb-5 mt-5'>
        <div className='w-75 d-flex gap-5'>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
        </div>
    </div>
}

export default FooterWrapper
