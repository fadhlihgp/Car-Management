import MainContainer from "../MainContainer";
import SubTitleDashboard from "../SubTitleDashboard";
import DataTable from "../DataTable";
import React, {useContext, useEffect} from "react";
import {DashboardContext} from "../../context/Dashboard/DashboardContext";
import {Spinner} from "react-bootstrap";
import {headers} from "./Headers";

const breadcrumbsData = [
    { text: 'Dashboard', link: '/dashboard' },
    { text: 'Dashboard', link: '/dashboard' },
];

const DashboardContainer = () => {
    const { state, handleFunction } = useContext(DashboardContext);
    const { fetchDataCars } = handleFunction;
    const { fetchStatus, setFetchStatus, dataCarsMapping } = state;

    useEffect(() => {
        fetchDataCars('')
    }, [fetchStatus, setFetchStatus])

    return(
        <MainContainer breadcrumpPaths={breadcrumbsData} title={'Dashboard'}>
            <SubTitleDashboard text='' />
            <div>List Car
                {dataCarsMapping && (
                    <DataTable data={dataCarsMapping} headers={headers} />
                )}
                {!dataCarsMapping && (<Spinner />)}
            </div>
        </MainContainer>
    )
}
export default DashboardContainer
