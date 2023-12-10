import MainContainer from "../MainContainer";
import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { DashboardContext } from "../../context/Dashboard/DashboardContext";
import { Button, Form } from "react-bootstrap";
import Cookies from "js-cookie";
import axios from "axios";
import SpinnerLoading from "../SpinnerLoading";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {Car} from "./Car";

const breadcrumbsData = [
    { text: 'Cars', link: '/cars' },
    { text: 'List Car', link: '/cars' },
];

const formStyle = {
    backgroundColor: 'white',
    borderRadius: '3px',
    padding: '15px'
}

const FormCarContainer = () => {
    const { carId } = useParams();
    const { state, handleFunction } = useContext(DashboardContext);
    const {
        carCurrentId,
        dataBrandCars,
        dataTypeCars,
        dataTransmissionCars,
        fetchStatus,
        setFetchStatus,
    } = state;
    const {
        handleCancelCar,
        handleSubmitCar,
        fetchTypeCars,
        fetchTransmissionCars,
        fetchBrandCars,
    } = handleFunction;
    const [input, setInput] = useState<Car>({
        name: "",
        size: "",
        description: "",
        pictureUrl: "",
        carTransmissionId: "",
        carBrandId: "",
        carTypeId: "",
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // ...

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleSaveCar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        if (selectedFile) {
            formData.append('picture', selectedFile);
        }

        if (carId && !selectedFile) {
            handleSubmitCar(e, { ...input });
        } else {
            axios.post(`${process.env.REACT_APP_API_URL}/api/v1/photo/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${Cookies.get('token')}`,
                },
            })
                .then((response) => {
                    handleSubmitCar(e, { ...input, pictureUrl: response.data.url });
                })
                .catch((error) => {
                    // Handle error
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setInput({ ...input, [name]: value });
    };

    const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = event.target;
        setInput({ ...input, [name]: value });
    }

    useEffect(() => {
        fetchTypeCars();
        fetchTransmissionCars();
        fetchBrandCars();
        if (carId) {
            axios.get(`${process.env.REACT_APP_API_URL}/api/v1/car/${carId}`, {
                headers: { Authorization: `Bearer ${Cookies.get('token')}` },
            })
                .then(({ data }) => {
                    const result = data.data;
                    setInput({
                        ...input,
                        name: result.name,
                        price: result.price,
                        year: result.year,
                        size: result.size,
                        capacity: result.capacity,
                        description: result.description,
                        carTransmissionId: result.carTransmission.id,
                        carBrandId: result.carBrand.id,
                        carTypeId: result.carType.id,
                    });
                })
                .catch((error) => {
                    // Handle error
                });
        }
        setFetchStatus(false);
    }, [carId, fetchStatus, setFetchStatus]);

    // ...

    const breads = [
        ...breadcrumbsData,
        {
            text: carCurrentId === '-1' ? 'Add New Car' : "Edit Car",
            link: '/cars'
        }
    ]

    return (
        <>
            <ToastContainer />
            <MainContainer breadcrumpPaths={breads} title={carCurrentId === '-1' ? 'Add New Car' : "Edit Car"}>
                {isLoading && (
                    <SpinnerLoading text='Menyimpan data ...' />
                )}
                <Form onSubmit={handleSaveCar}>
                    <div style={formStyle}>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Nama <span style={{color: 'red'}}>*</span></label>
                            <Form.Control name='name' value={input.name} onChange={handleOnChange} type={'text'} style={{ width: '50%', height: '36px'}} placeholder={'contoh: Honda Brio'} required/>
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Harga <span style={{color: 'red'}}>*</span></label>
                            <Form.Control name='price' value={input.price} onChange={handleOnChange} type={'number'} style={{ width: '50%', height: '36px'}} placeholder={'contoh: 350000000'} required />
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Tahun <span style={{color: 'red'}}>*</span></label>
                            <Form.Control name='year' value={input.year} onChange={handleOnChange} type={'number'} style={{ width: '50%', height: '36px'}} placeholder={'contoh: 2020'} required />
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Ukuran <span style={{color: 'red'}}>*</span></label>
                            <Form.Select name='size' value={input.size} onChange={handleOnSelect} style={{ width: '50%', height: '36px'}} required>
                                <option value=''>Pilih Ukuran</option>
                                <option value='Small'>Small</option>
                                <option value='Medium'>Medium</option>
                                <option value='Large'>Large</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Kapasitas <span style={{color: 'red'}}>*</span></label>
                            <Form.Control name='capacity' value={input.capacity} onChange={handleOnChange} type={'number'} style={{ width: '50%', height: '36px'}} placeholder={'contoh: 4'} required />
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Deskripsi <span style={{color: 'red'}}>*</span></label>
                            <Form.Control name='description' value={input.description} onChange={handleOnChange} type={'text'} as='textarea' style={{ width: '50%', height: '75px'}} placeholder={'deskripsi'} required />
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Tipe <span style={{color: 'red'}}>*</span></label>
                            <Form.Select name='carTypeId' value={input.carTypeId} onChange={handleOnSelect} style={{ width: '50%', height: '36px'}} required>
                                <option value=''>Pilih Tipe</option>
                                {dataTypeCars?.map(({id, name}) => {
                                    return <option value={id}>{name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Transmisi <span style={{color: 'red'}}>*</span></label>
                            <Form.Select name='carTransmissionId' value={input.carTransmissionId} onChange={handleOnSelect} style={{ width: '50%', height: '36px'}} required>
                                <option value=''>Pilih Transmisi</option>
                                {dataTransmissionCars?.map(({id, name}) => {
                                    return <option value={id}>{name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Brand <span style={{color: 'red'}}>*</span></label>
                            <Form.Select name='carBrandId' value={input.carBrandId} onChange={handleOnSelect} style={{ width: '50%', height: '36px'}} required>
                                <option value=''>Pilih Brand</option>
                                {dataBrandCars?.map(({id, name}) => {
                                    return <option value={id}>{name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='d-flex mb-3' style={{ gap: '15%'}}>
                            <label style={{ width: '10%'}}>Foto <span style={{color: 'red'}}>*</span></label>
                            <Form.Control onChange={handleFileInputChange} type='file' style={{ width: '50%', height: '36px'}} />
                        </Form.Group>
                    </div>
                    <div className='mt-5 d-flex gap-3'>
                        <Button onClick={handleCancelCar} style={{borderRadius: '0'}} variant='outline-primary' size={'sm'}>Cancel</Button>
                        <Button
                            style={{borderRadius: '0', backgroundColor: '#0D28A6'}}
                            size={'sm'}
                            disabled={!input.name || !input.size || !input.price || !input.year
                                || !input.carTypeId || !input.carTransmissionId || !input.carBrandId
                                || !input.description || !input.capacity || (!carId ? !selectedFile : false)}
                            type={'submit'}
                        >
                            Save
                        </Button>
                    </div>
                </Form>
            </MainContainer>
        </>
    );
};
export default FormCarContainer;
