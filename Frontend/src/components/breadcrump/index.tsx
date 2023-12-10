import {Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import {BreadcrumpComponentProps} from "./BreadcrumpComponentProps";

const BreadcrumpComponent = ({paths}: BreadcrumpComponentProps) => {
    return(
        <Breadcrumb>
            {paths.map((path, index) => {
                const isLast = index === paths.length - 1;
                return (
                    <Breadcrumb.Item
                        key={index}
                        active={isLast}
                        as={isLast ? 'span' : Link}
                    >
                        {!isLast && (<Link to={path.link}>{path.text}</Link>)}
                        {isLast && (<span>{path.text}</span>)}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    )
}
export default BreadcrumpComponent
