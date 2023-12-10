import LayoutDashboard from "../../widget/LayoutDashboard";
import FormCarContainer from "../../components/FormCar";
import React from "react";

const FormCar = () => {
    return (
        <div>
            <LayoutDashboard>
                <FormCarContainer />
                {/*<DataTable/>*/}
            </LayoutDashboard>
        </div>
    )
}
export default FormCar
