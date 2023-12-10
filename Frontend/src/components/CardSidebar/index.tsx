import React, {useState} from "react";
import {CardSidebarProps} from "./CardSidebarProps";

const contentStyle: React.CSSProperties = {
    display: 'flex',
    width: '75px',
    height: "64px",
    padding: '20px 23px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px'
}
const CardSidebar = ({ icon, text }: CardSidebarProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(true)
    }
    const handleLeaveHover = () => {
        setIsHovered(false)
    }

    const mergeStyle = {
        ...contentStyle,
        background: isHovered ? 'rgba(255, 255, 255, 0.3)' : 'none',
        fontWeight: isHovered ? '700' : '400'
    }

    return(
        <div style={mergeStyle} onMouseEnter={handleHover} onMouseLeave={handleLeaveHover}>
            <img src={icon} alt="home"/>
            <span>{text}</span>
        </div>
    )
}
export default CardSidebar;
