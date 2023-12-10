import rate from "../../../resources/Rate.png"
import profile from "../../../resources/img_photo.png"
import React from "react";
import {TestimonialCardProps} from "./TestimonialCardProps";
import {cardStyle} from "./TestimonialCardStyle";

const textDefault = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”';
const profileImgDefault = profile;
const nameDefault = 'John Dee 32, Bromo'

const Content = ({ text, name}: TestimonialCardProps) => {
    return <div className='d-flex flex-column gap-3'>
        <img src={rate} alt={'rate'} width='80px'/>
        <p>{text}</p>
        <span style={{ fontWeight: '400px'}}>{name}</span>
    </div>
}

const TestimonialCard = ({ text = textDefault, profileImg = profileImgDefault, name = nameDefault}: TestimonialCardProps) => {
    return <div style={cardStyle} className='px-xl-5'>
        <img src={profileImg} alt={'profile'}/>
        <Content text={text} name={name} />
    </div>
}

export default TestimonialCard;
