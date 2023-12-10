import NavLogo from "../logo";
import Hamburger from "../hamburger";
import Search from "../search";
import Profile from "../profile";
import React from "react";
import {TopbarProps} from "./TopbarProps";

const topbarStyle: React.CSSProperties = {
    background: 'var(--neutral-01, #fff)',
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.05)',
    height: '70px'
}

const Topbar = ({ fullName, pictureUrl, handleOnClick }: TopbarProps) => {
    return (
        <div className='d-flex p-3 container-fluid' style={topbarStyle}>
            <div className='w-50'>
                <NavLogo />
                <Hamburger handleOnClick={handleOnClick} />
            </div>
            <div className='d-flex gap-4 justify-content-end w-50'>
                <Search />
                <Profile name={fullName} img={pictureUrl} />
            </div>
        </div>
    )
}

export default Topbar;
