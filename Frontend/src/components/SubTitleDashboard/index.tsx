import rectangle from "../../resources/Rectangle 9.png"
import React from "react";
import {SubtitleDashboardProps} from "./SubtitleDashboardProps";

const SubTitleDashboard = ({text}: SubtitleDashboardProps) => {
    return (
        <div className='d-flex gap-2'>
            <div><img src={rectangle} alt={'list'}/></div>
            <div><b>{text}</b></div>
        </div>
    )
}
export default SubTitleDashboard
