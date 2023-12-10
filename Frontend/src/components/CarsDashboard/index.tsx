import React, {useContext, useEffect} from "react";
import MainContainer from "../MainContainer";
import ButtonCustom from "../button";
import fi_plus from ".././../resources/fi_plus.png";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ButtonFilter from "./ButtonFilter";
import {DashboardContext} from "../../context/Dashboard/DashboardContext";
import CardCarDashboard from "../CardCarDashboard";
import {Spinner} from "react-bootstrap";
import {filterCars} from "./FilterCars";

const breadcrumbsData = [
    { text: 'Cars', link: '/cars' },
    { text: 'List Car', link: '/cars' },
];

const listCarStyle: React.CSSProperties = {
    marginTop: "1em",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px"
}
const CarsDashboardContainer = () => {
    const navigate = useNavigate();
    const { state, handleFunction } = useContext(DashboardContext);
    const [isActive, setIsActive] = useState(0);
    const { fetchDataCars, handleEdit } = handleFunction;
    const { fetchStatus, setFetchStatus, setCarCurrentId, dataCarsMapping } = state;

    useEffect(() => {
        fetchDataCars('')
    }, [fetchStatus, setFetchStatus])

    const handleFilterOnClick = (text: string) => {
        navigate(`/cars${text}`)
        // setFetchStatus(true)
        fetchDataCars(text)
    }

    const handleClick = () => {
        setCarCurrentId('-1');
        navigate("/cars/newcar");
    }

    const handleClickIsActive = (index: number) => {
        setIsActive(index)
    }

    return(
        <MainContainer
            breadcrumpPaths={breadcrumbsData}
            title={'List Car'}
            childrenTitle={<ButtonCustom onClick={handleClick} color={'#0D28A6'} name={<span><img alt={'+'} src={fi_plus}/> Add New Car</span>} />}>
            <div className='d-flex flex-column'>
                <div className='d-flex gap-2'>
                    {filterCars.map(({stringParam, text}, index) => {
                        return <div onClick={() => handleClickIsActive(index)}>
                            <ButtonFilter onClick={() => handleFilterOnClick(stringParam)} variantColor={index === isActive ? 'primary' : 'outline-primary'} text={text} />
                        </div>
                    })}
                </div>
                <div style={listCarStyle}>
                    {dataCarsMapping.length === 0 && (<Spinner />)}
                    {dataCarsMapping && dataCarsMapping.map(({id, name, type, price, startRent, finishRent, updatedAt, pictureUrl}) => {
                        return <CardCarDashboard
                            id={id}
                            name={name}
                            price={price}
                            startRent={startRent}
                            finishRent={finishRent}
                            type={type}
                            updatedAt={updatedAt}
                            imgUrl={pictureUrl}
                            handleClickEdit={() => handleEdit(id)}
                        />
                    })}
                </div>
            </div>
        </MainContainer>
    )
}
export default CarsDashboardContainer;
