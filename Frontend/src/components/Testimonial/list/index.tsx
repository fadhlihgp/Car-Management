import imgProfile1 from "../../../resources/img_photo.png"
import imgProfile2 from "../../../resources/img_photo2.png"
import TestimonialCard from "../card";
import React from "react";

const list = [
    {
        profileImg: imgProfile1,
        name:'John Dee 32, Bromo'
    },
    {
        profileImg: imgProfile1,
        name:'John Dee 32, Bromo'
    },
    {
        profileImg: imgProfile2,
        name:'John Dee 32, Bromo'
    },

]
const TestimonialList = () => {
    return <div className='d-flex align-items-center justify-content-center gap-5'>
        { list.map(({profileImg, name}) => {
            return <TestimonialCard name={name} profileImg={profileImg} />
        })}
    </div>
}

export default TestimonialList;
