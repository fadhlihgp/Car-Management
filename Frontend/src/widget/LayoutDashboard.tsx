import Sidebar from "../components/sidebar";
import DashboardWrapper from "../components/navbars/Dashboard/wrapper";
import {LayoutDashboardProps} from "./LayoutDashboardProps";
import React from "react";
const LayoutDashboard: React.FC<LayoutDashboardProps> = ({children} : LayoutDashboardProps) => {
    return(
        <div className='d-flex w-100'>
            <Sidebar  />
            <DashboardWrapper  >
                {children}
            </DashboardWrapper>
        </div>
    )
}
export default LayoutDashboard
