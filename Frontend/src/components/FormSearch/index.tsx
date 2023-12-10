import { Form, Button } from 'react-bootstrap';
import React, {ChangeEvent, useState} from 'react';
import {listTime} from "./listTime";
import SearchCarCard from "../SearchCarCard";
import axios from "axios";
import {DataCar} from "./DataCar";

const searchForm: React.CSSProperties = {
    backgroundColor: 'white',
    margin: '-60px auto 0 auto',
    width: '80%',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    marginBottom: '20px'
}

const listCarStyle: React.CSSProperties = {
    marginTop: "1em",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "auto",
    width: "80%",
    gap: "24px"
}

const FormSearch = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [passengerCount, setPassengerCount] = useState('');
    const [dataCars, setDataCars] = useState<DataCar[]>([]);
    const [showCar, setShowCar] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(e.target.value);
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };

    const handleTimeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedTime(e.target.value);
    };

    const fetchData = async () => {
        const { data } = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/no-auth/car');
        let cars = data.data;

        let filterData = cars.filter((res: any) => {
            return (
                new Date(selectedDate) > new Date(res.availableAt) &&
                res.capacity > (parseInt(passengerCount) || 0) &&
                res.availability
            );
        });

        setDataCars(filterData);
        setShowCar(true);
        setDisable(true);
    };

    const handlePassengerChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassengerCount(e.target.value);
    };

    const disableHandle = () => {
        setDisable(false);
    };

    return (
        <div>
            <div style={searchForm}>
                <Form>
                    {showCar && (<div className='mb-2'><b>Pencarianmu</b></div>)}
                    <div className='d-flex justify-content-around'>
                        <div style={{ width: '21.75%'}}>
                            <Form.Label>Tipe Driver</Form.Label>
                            <Form.Select value={selectedType} onChange={handleTypeChange} disabled={disable}>
                                <option value="" disabled selected>Pilih Tipe Driver</option>
                                <option value="1">Dengan Supir</option>
                                <option value="2">Tanpa Supir (Lepas Kunci)</option>
                            </Form.Select>
                        </div>
                        <div style={{ width: '21.75%'}}>
                            <Form.Label>Tanggal</Form.Label>
                            <Form.Control type="date" value={selectedDate} onChange={handleDateChange} disabled={disable}/>
                        </div>
                        <div style={{ width: '21.75%'}}>
                            <Form.Label>Waktu Jemput/Ambil</Form.Label>
                            <Form.Select value={selectedTime} onChange={handleTimeChange} disabled={disable}>
                                <option value="" disabled selected>Pilih Waktu</option>
                                {listTime.map(({show, value} ) => {
                                    return <option value={value}>{show}</option>
                                })}
                            </Form.Select>
                        </div>
                        <div style={{ width: '21.75%'}}>
                            <Form.Label>Jumlah Penumpang</Form.Label>
                            <div className="position-relative">
                                <Form.Control type="number" placeholder="Jumlah Penumpang" onChange={handlePassengerChange} disabled={disable} />
                                <div style={{ margin: '8px' }}>
                                    {/* Add SVG icon */}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-2'>
                            <div style={{ height: '35%'}}></div>
                            <div>
                                {!disable && (
                                    <Button className="btn-success btn-sm" onClick={fetchData} disabled={!selectedType || !selectedTime || !selectedDate}>
                                        Cari Mobil
                                    </Button>
                                )}
                                {disable && (
                                    <Button className="btn-sm" variant='outline-primary' onClick={disableHandle}>
                                        Edit
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
            {showCar && dataCars && (
                <div style={listCarStyle}>
                    {dataCars.map(( { carType, price, carTransmission, capacity, year, description, pictureUrl, id} ) => {
                        return <SearchCarCard type={carType.name} capacity={capacity} rentPerDay={price} transmission={carTransmission.name} year={year} description={description} imgUrl={pictureUrl} id={id} />
                    })}
                </div>
            )}
            {showCar && (dataCars.length == 0) && (
                <div style={listCarStyle}>
                    <h3>Data tidak ditemukan</h3>
                </div>
            )}
        </div>
    );
};

export default FormSearch;

