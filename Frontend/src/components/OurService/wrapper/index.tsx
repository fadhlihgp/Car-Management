import OurServiceImage from "../image";
import OurServiceWrapperContent from "../content";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

const style = {
    padding: '100px 25px'
}
const WrapperOurService = () => {
    return<div style={style} id='OurService'>
        <Container>
            <Row>
                <Col sm={6}><OurServiceImage /></Col>
                <Col sm={6}><OurServiceWrapperContent /></Col>
            </Row>
        </Container>
    </div>
}

export default WrapperOurService;
