import car from "../../resources/img-BeepBeep.png";
import { Button } from "react-bootstrap";
import React, {useContext} from "react";
import {DashboardContext} from "../../context/Dashboard/DashboardContext";
import {ConfirmDeleteCardProps} from "./ConfirmDeleteCardProps";

const descStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'center',
}
const ConfirmDeleteCard = ({ id, show, handleClose }: ConfirmDeleteCardProps) => {
    const { handleFunction } = useContext(DashboardContext);
    const { handleDelete } = handleFunction;

    const handleCancel = () => {
        handleClose(); // Menutup modal saat tombol Tidak diklik
    };

    const handleDeleteSubmit = () => {
        handleDelete(id);
        handleClose(); // Tutup modal setelah penghapusan data
    };

    return (
        <>
            {show && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
                    <div className='d-flex flex-column justify-content-center p-5 align-items-center' style={{backgroundColor:'white', width:'30%', position: 'absolute', top: '20%', left: '35%', borderRadius: '4px'}}>
                        <div>
                            <img src={car} alt={'car'} width={'153px'} />
                        </div>
                        <div className='my-3'><b>Menghapus Data Mobil</b></div>
                        <p style={descStyle} className='mb-3'>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
                        <div className='d-flex gap-3'>
                            <Button style={{backgroundColor: '#0D28A6', width: '87px', borderRadius: '4px'}} onClick={handleDeleteSubmit} >Ya</Button>
                            <Button variant={'outline-primary'} style={{width: '87px', borderRadius: '4px'}} onClick={handleCancel}>Tidak</Button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};
export default ConfirmDeleteCard;
