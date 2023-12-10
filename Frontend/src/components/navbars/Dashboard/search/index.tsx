import {Button, Col, Container, Form, Row} from "react-bootstrap";
import search from "../../../../resources/fi_search.png"
import React, {MouseEventHandler, useContext, useState} from "react";
import {DashboardContext} from "../../../../context/Dashboard/DashboardContext";
import {useLocation, useNavigate} from "react-router-dom";
const inputStyle = {
    border: '1px solid #ccc', /* Gray border */
    padding: '5px', /* Add some padding */
    display: 'flex',
    alignItems: 'center'
}
const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { handleFunction } = useContext(DashboardContext);
    const { fetchDataCars } = handleFunction;
    const [searchCar, setSearchCar] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        setSearchCar(value)
    }

    const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        const currentRoute = location.pathname.substring(1);
        const searchRoute = currentRoute ? `/${currentRoute}` : '';

        const queryString = searchCar ? `?name=${searchCar}` : '';

        navigate(`${searchRoute}${queryString}`);
        fetchDataCars(`${queryString}`);
    }

    return(
        <div className='d-flex' >
            <div className="search-icon" style={inputStyle}>
                <img src={search} alt="search" />
                <input type="text" onChange={handleOnChange} value={searchCar} name='searchCar' placeholder="Search" style={{border: 'none', outline: 'none'}} />
            </div>
            <Button onClick={handleOnClick} variant='outline-primary' size='sm'>Search</Button>
        </div>
    )
}
export default Search;
