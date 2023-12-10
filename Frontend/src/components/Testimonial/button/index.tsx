import leftbutton from "../../../resources/leftbutton.png"
import rightbutton from "../../../resources/rightbutton.png"
import React from "react";
import {TestimonialButtonProps} from "./TestimonialButtonProps";

const style = {
    border: '0px',
    backgroundColor: '#FFFFFF',
}

const TestimonialButton = ({ onclick }: TestimonialButtonProps) => {
    return <div className='d-flex gap-4 justify-content-center align-items-center mt-4'>
        <button style={style} onClick={onclick}><img src={leftbutton} alt={'leftbutton'}/></button>
        <button style={style}><img src={rightbutton} alt={'righbutton'}/></button>

    </div>
}

export default TestimonialButton
