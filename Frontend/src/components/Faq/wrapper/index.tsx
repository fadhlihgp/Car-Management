import FaqTitle from "../title";
import {Col, Container, Row} from "react-bootstrap";
import FaqList from "../list";
import React from "react";

const FaqWrapper = () => {
    return (
        <Container style={{ margin: '10% 0'}}>
            <Row>
                <Col sm={5}><FaqTitle /></Col>
                <Col sm={7}><FaqList /></Col>
            </Row>
        </Container>
    )
}

export default FaqWrapper;
