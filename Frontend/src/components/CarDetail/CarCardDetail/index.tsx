import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fi_setting from '../../../resources/fi_settings.png';
import fi_user from '../../../resources/fi_users.png';
import fi_calendar from '../../../resources/fi_calendar.png';
import {CarCardDetailProps} from "./CarCardDetailProps";

const textStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#8A8A8A'
};

const CarCardDetail: React.FC<CarCardDetailProps> = ({
                                                         imgUrl = 'https://www.topgear.com/sites/default/files/2022/07/6_0.jpg',
                                                         name,
                                                         type,
                                                         price,
                                                         capacity,
                                                         transmission,
                                                         year,
                                                         id,
                                                     }) => {
    return (
        <Card style={{ borderRadius: '8px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)', border: '0', padding: '10px' }} key={id}>
            <Card.Img variant="top" src={imgUrl} style={{}} />
            <Card.Body>
                <b>{name}/{type}</b>
                <Card.Text style={textStyle}>
                    <span style={{ marginRight: '7%' }}><img src={fi_user} alt='logo' /> <span style={{ marginLeft: '1%' }}>{capacity} Orang</span></span>
                    <span style={{ marginRight: '7%' }}><img src={fi_setting} alt='logo' /> <span style={{ marginLeft: '1%' }}>{transmission}</span></span>
                    <span style={{ marginRight: '7%' }}><img src={fi_calendar} alt='logo' /> <span style={{ marginLeft: '1%' }}>Tahun {year}</span></span>
                </Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-between my-4 mt-5'>
                <div>Total</div>
                <div><b>Rp {price}</b></div>
            </div>
            <Button variant="success" className='container-fluid'>Lanjutkan Pembayaran</Button>
        </Card>
    );
};
export default CarCardDetail;
