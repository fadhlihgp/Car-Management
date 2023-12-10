import CardDetailForm from "../form";
import CardDetailDescriptionWrapper from "../CardDetailDescription";
import CarCardDetail from "../CarCardDetail";
import {Button, Card, Col, Row, Spinner} from "react-bootstrap";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import SpinnerLoading from "../../SpinnerLoading";
import {DataCar} from "./DataCar";

const cardStyle = {
    border: '0',
    width: '80%',
    margin: '10px auto'
}

const CarDetailWrapper = () => {
    const {carId} = useParams();
    const [data, setData] = useState<DataCar | null>(null);

    useEffect(() => {
        if (carId) {
            axios.get(process.env.REACT_APP_API_URL+`/api/v1/no-auth/car/${carId}`)
                .then((res) => setData(res.data.data))
        }
    }, [carId])

    return (
        <>
            { data ? (<div>
                <CardDetailForm />
                <Card style={cardStyle}>
                    <Row>
                        <Col sm={7}><CardDetailDescriptionWrapper /></Col>
                        <Col sm={5}><CarCardDetail
                            id={data.id}
                            price={data.price}
                            imgUrl={data.pictureUrl}
                            year={data.year}
                            name={data.name}
                            type={data.carType.name}
                            transmission={data.carTransmission.name}
                            capacity={data.capacity} /></Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm={12} className='d-flex justify-content-center'>
                            <Button variant='success'>Lanjutkan Pembayaran</Button>
                        </Col>
                    </Row>
                </Card>
            </div>) :
                (<SpinnerLoading text={'Loading ...'} />)
            }

        </>

    )
}

export default CarDetailWrapper;
