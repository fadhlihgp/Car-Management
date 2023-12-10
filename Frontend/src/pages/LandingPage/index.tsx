import Banner from "../../components/banner/wrapper";
import WrapperOurService from "../../components/OurService/wrapper";
import WhyUsWrapper from "../../components/WhyUs/wrapper";
import TestimonialWrapper from "../../components/Testimonial/wrapper";
import CtaWrapper from "../../components/CtaBanner/wrapper";
import FaqWrapper from "../../components/Faq/wrapper";
import FooterWrapper from "../../components/Footer/wrapper";
import ButtonCustom from "../../components/button";
import {Link} from "react-router-dom";
import React from "react";

const LandingPage = () => {
    return (
        <div>
            <Banner>
                <Link to="/search">
                    <ButtonCustom name='Mulai Sewa Mobil'/>
                </Link>
            </Banner>
            <WrapperOurService />
            <WhyUsWrapper />
            <TestimonialWrapper />
            <CtaWrapper />
            <FaqWrapper />
            <FooterWrapper />
        </div>
    )
}

export default LandingPage;
