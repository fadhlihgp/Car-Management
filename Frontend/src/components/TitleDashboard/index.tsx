import {string} from "prop-types";
import React from "react";
import {TitleDashboardProps} from "./TitleDashboardProps";
import {textStyle} from "./TitleDashboardStyle";

const TitleDashboard = ({title, children}: TitleDashboardProps) => {
    return (
        <div className='d-flex justify-content-between'>
            <div><h4 style={textStyle}>{title}</h4></div>
            <div>{children}</div>
        </div>
    )
}
TitleDashboard.propTypes = {
    title: string.isRequired
}
export default TitleDashboard
