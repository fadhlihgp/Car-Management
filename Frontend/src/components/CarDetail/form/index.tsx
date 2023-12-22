import React, { useState } from "react";
import { Form } from "react-bootstrap";

const searchForm: React.CSSProperties = {
	backgroundColor: "white",
	margin: "-60px auto 0 auto",
	width: "80%",
	padding: "24px",
	borderRadius: "8px",
	boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
	position: "relative",
	marginBottom: "20px"
};

const CardDetailForm = () => {
	const [disable] = useState<boolean>(true);

	return (
		<div style={searchForm}>
			<Form>
				<div className='mb-2'><b>Pencarianmu</b></div>
				<div className='d-flex justify-content-around'>
					<div style={{ width: "21.75%" }}>
						<Form.Label htmlFor="tipeDriverForm">Tipe Driver</Form.Label>
						<Form.Control id="tipeDriverForm" as='select' disabled={disable}>
						</Form.Control>
					</div>
					<div style={{ width: "21.75%" }}>
						<Form.Label htmlFor="dateForm">Tanggal</Form.Label>
						<Form.Control id="dateForm" type="text" disabled={disable} />
					</div>
					<div style={{ width: "21.75%" }}>
						<Form.Label htmlFor="timePickupForm">Waktu Jemput/Ambil</Form.Label>
						<Form.Control id="timePickupForm" as='select' disabled={disable}>
						</Form.Control>
					</div>
					<div style={{ width: "21.75%" }}>
						<Form.Label htmlFor="totalPassangerForm">Jumlah Penumpang</Form.Label>
						<div className="position-relative">
							<Form.Control id="totalPassangerForm" type="text" disabled={disable} />
							<div style={{ margin: "8px" }}>
							</div>
						</div>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default CardDetailForm;
