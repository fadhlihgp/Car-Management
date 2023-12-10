import Topbar from "../topbar";
import SubSidebar from "../../../sub-sidebar";
import React, {ReactNode, useContext, useEffect} from "react";
import {DashboardContext} from "../../../../context/Dashboard/DashboardContext";

interface DashboardWrapperProps {
    children: ReactNode
}

const DashboardWrapper = ({children}: DashboardWrapperProps) => {
    const { state, handleFunction } = useContext(DashboardContext);
    const { currentUser, fetchStatus, setFetchStatus, showSubDashboard, setShowSubDashboard } = state;
    const { fetchDataCurrentUser } = handleFunction;


    const handleClickShow = () => {
        setShowSubDashboard(!showSubDashboard);
    }
    useEffect(() => {
        fetchDataCurrentUser()
    }, [fetchStatus, setFetchStatus])

    return(
        <div className='d-flex flex-column w-100'>
            <Topbar handleOnClick={handleClickShow} fullName={currentUser?.fullName} pictureUrl={currentUser?.pictureUrl} />
            <div className='d-flex'>
                <div className='w-auto'>
                    {showSubDashboard && (<SubSidebar />)}
                </div>
                <div className='w-100'>
                    {children}
                </div>
            </div>
        </div>

    )
}
export default DashboardWrapper;
