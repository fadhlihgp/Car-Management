import FooterWrapper from "../../components/Footer/wrapper";
import CarDetailWrapper from "../../components/CarDetail/wrapper";
import BannerPlain from "../../components/BannerPlain";
import React from "react";

const CarDetailPage = () => {
    return(
        <div style={{position: 'relative'}}>
            <BannerPlain />
            <CarDetailWrapper />
            <FooterWrapper />
        </div>
    )
}

export default CarDetailPage;
