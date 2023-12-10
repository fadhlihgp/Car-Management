import FooterWrapper from "../../components/Footer/wrapper";
import FormSearch from "../../components/FormSearch";
import BannerPlain from "../../components/BannerPlain";
import React from "react";

const SearchCar = () => {
    return (
        <div style={{position: 'relative'}}>
            <BannerPlain />
            <FormSearch />
            <FooterWrapper />
        </div>
    )
}

export default SearchCar;
