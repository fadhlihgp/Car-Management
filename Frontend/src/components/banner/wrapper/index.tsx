import WrapperText from "../wrapper-text";
import CarImage from "../car-banner";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {BannerProps} from "./BannerProps";

const Banner = ({children}: BannerProps) => {
    return <Container fluid style={{backgroundImage: `url(https://i.ibb.co/ZS2srHQ/bg.png)`}} className='p-5 pb-0'>
        <Row >
            <Col sm={6}>
                <WrapperText>
                    {/*<Button name='Mulai Sewa Mobil' />*/}
                    {children}
                </WrapperText>
            </Col>
            <Col sm={6}><CarImage /></Col>
        </Row>
    </Container>
}

export default Banner;
