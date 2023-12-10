import facebook from "../../../resources/icon_facebook.png"
import instagram from "../../../resources/icon_instagram.png"
import twitter from "../../../resources/icon_twitter.png"
import mail from "../../../resources/icon_mail.png"
import message from "../../../resources/icon_twitch.png"
import React from "react";

const ListLogo = () => {
    return <div className='d-flex gap-3'>
        <a href='#'><img src={facebook} alt='logo'/></a>
        <img src={instagram} alt='logo'/>
        <img src={twitter} alt='logo'/>
        <img src={mail} alt='logo'/>
        <img src={message} alt='logo'/>
    </div>
}

export default ListLogo;
