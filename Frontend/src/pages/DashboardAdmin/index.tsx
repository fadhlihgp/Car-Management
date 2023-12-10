
import LayoutDashboard from "../../widget/LayoutDashboard";
import DashboardContainer from "../../components/dashboard";
import React from "react";
const DashboardAdmin = () => {
    return (
        <div>
            <LayoutDashboard>
                <DashboardContainer />
                {/*<DataTable/>*/}
            </LayoutDashboard>
        </div>
    )
}
export default DashboardAdmin;
