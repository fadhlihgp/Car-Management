import React from "react";
import { Button, Card } from 'react-bootstrap';
import fi_setting from "../../resources/fi_settings.png";
import fi_user from "../../resources/fi_users.png";
import fi_calendar from "../../resources/fi_calendar.png";
import { Link } from "react-router-dom";

interface SearchCardCarProps {
    imgUrl?: string;
    type?: string;
    rentPerDay?: number;
    description?: string;
    capacity?: number;
    transmission?: string;
    year?: number;
    id: string;
}

const SearchCardCar: React.FC<SearchCardCarProps> = ({ imgUrl = "-", type="-", rentPerDay=0, description="-", capacity="0", transmission="-", year=0, id="-" }) => {
    return (
        <Card style={{ width: '20rem', borderRadius: '8px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)', border: '0', padding: '10px' }} key={id}>
            <Card.Img variant="top" src={imgUrl || 'https://www.topgear.com/sites/default/files/2022/07/6_0.jpg'} style={{}} />
            <Card.Body>
                <p>{type || '-'}</p>
                <b>Rp {rentPerDay || 0} / Hari</b>
                <Card.Text>
                    {description || '-'}
                </Card.Text>
            </Card.Body>
            <div>
                <p><img src={fi_user} alt='logo' /> <span style={{ marginLeft: "8px" }}>{capacity || 0} Orang</span></p>
                <p><img src={fi_setting} alt='logo' /> <span style={{ marginLeft: "8px" }}>{transmission || '-'}</span></p>
                <p><img src={fi_calendar} alt='logo' /> <span style={{ marginLeft: "8px" }}>Tahun {year || 0}</span></p>
            </div>
            <Link to={`detail/${id}`} ><Button variant="success" className='container-fluid'>Pilih Mobil</Button></Link>
        </Card>
    );
}

export default SearchCardCar;
