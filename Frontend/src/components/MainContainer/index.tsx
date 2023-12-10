import Breadcrump from "../breadcrump";
import TitleDashboard from "../TitleDashboard";
import React from "react";
import {MainContainerProps} from "./MainContainerProps";

const MainContainer = ( {breadcrumpPaths, title, children, childrenTitle}: MainContainerProps) => {
    return (
        <div style={{background: '#F4F5F7'}} className='container-fluid h-100 d-flex flex-column p-4 gap-3'>
            <Breadcrump paths={breadcrumpPaths} />
            <TitleDashboard title={title} children={childrenTitle} />
            {children}
        </div>
    )
}
export default MainContainer;
