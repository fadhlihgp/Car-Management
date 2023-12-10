import React from "react";
import Icon from "../icon";
import "../../../App.css"
import {listContent} from "./listContent";

const titleStyle = {
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '36px',
    width: '90%'
}

const Title = () => {
    return <h1 style={titleStyle}>
        Best Car Rental for any kind of trip in Bekasi!
    </h1>
}

const Description = () => {
    return <div style={{marginTop: '24px'}}>
        <p>
            Sewa mobil di Bekasi bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
            mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
        </p>
    </div>
}

const List = () => {
    return<>
        {listContent.map(({text}, index) => {
            return <div key={index} style={{ display: 'flex', flexDirection: "row", gap: "16px" }} className='mb-3'>
                <Icon />
                <span>{text}</span>
            </div>
        })}

    </>
}

const OurServiceWrapperContent = () => {
    return <div style={{marginTop: '30px'}}>
        <Title />
        <Description />
        <List />
    </div>
}

export default OurServiceWrapperContent;
