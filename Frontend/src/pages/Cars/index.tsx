import LayoutDashboard from "../../widget/LayoutDashboard";
import CarsDashboardContainer from "../../components/CarsDashboard";
import {ToastContainer} from "react-toastify";
import React from "react";

const Cars = () => {
    return(
        <div>
            <LayoutDashboard>
                <ToastContainer />
                <CarsDashboardContainer/>
            </LayoutDashboard>
        </div>
    )
}
export default Cars
