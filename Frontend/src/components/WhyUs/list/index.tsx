import {Card} from "react-bootstrap";
import React from "react";
import {cardList} from "./WhyUsListList";
import {titleStyle} from "./WhyUsListStyle";

const WhyUsList = () => {
    return <div className='d-flex gap-4 align-items-center justify-content-center mt-5'>
        {cardList.map(({ icon, title, description }) => {
            return <Card style={{ width: '16rem' }} className='p-2'>
                <Card.Body>
                    <Card.Title><img src={icon} alt="logo"/></Card.Title>
                    <Card.Subtitle className="mb-4 mt-3"><h3 style={titleStyle}>{title}</h3></Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        })}

    </div>
}

export default WhyUsList;
