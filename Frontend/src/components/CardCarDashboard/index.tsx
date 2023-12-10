import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";
import ConfirmDeleteCard from "../ConfirmDeleteCard";
import { useNavigate } from "react-router-dom";

import fi_setting from "../../resources/fi_settings.png";
import fi_key from "../../resources/fi_key.png";
import fi_time from "../../resources/fi_clock.png";
import trash from "../../resources/trash.png";
import fi_edit from "../../resources/fi_edit.png";
import nopic from "../../resources/nopic.jpg";
import {CardCarDashboardProps} from "./CardCarDashboardProps";

const CardCarDashboard: React.FC<CardCarDashboardProps> = ({
                                                               imgUrl = nopic,
                                                               name,
                                                               type,
                                                               price,
                                                               startRent,
                                                               finishRent,
                                                               updatedAt,
                                                               id,
                                                               handleClickEdit,
                                                           }) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const confirmDelete = () => {
        setShowModal(true);
    };

    // Fungsi untuk menutup modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <ConfirmDeleteCard show={showModal} handleClose={handleCloseModal} id={id} />
            <Card style={{ width: '18.5rem', borderRadius: '8px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)', border: '0', padding: '2%' }} key={id}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <p>{name}/{type}</p>
                    <b>Rp {price} / Hari</b>
                </Card.Body>
                <div>
                    <p><img src={fi_key} alt='logo' /> <span style={{ marginLeft: "8px" }}>{moment(startRent).format("DD MMM YYYY")} - {moment(finishRent).format("DD MMM YYYY")}</span></p>
                    <p><img src={fi_time} alt='logo' /> <span style={{ marginLeft: "8px" }}>Updated at {moment(updatedAt).format("DD MMM YYYY hh:mm")}</span></p>
                </div>
                <div className='d-flex gap-2 w-100'>
                    <Button onClick={confirmDelete} variant='outline-danger' style={{ width: '50%' }}><img src={trash} alt='delete' /> Delete</Button>
                    <Button onClick={handleClickEdit} variant='success' style={{ width: '50%' }}><img src={fi_edit} alt='edit' /> Edit</Button>
                </div>
            </Card>
        </>
    );
};

export default CardCarDashboard;
