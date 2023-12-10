import {Accordion} from "react-bootstrap";
import React from "react";

interface FaqAccordianProps {
    key: string
    headerText: string,
    bodyText?: string
}
const FaqAccordion = ({ key, headerText, bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }: FaqAccordianProps) => {
    return(
        <Accordion className='mb-1'>
            <Accordion.Item eventKey={key}>
                <Accordion.Header>{headerText}</Accordion.Header>
                <Accordion.Body>
                    {bodyText}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default FaqAccordion;
