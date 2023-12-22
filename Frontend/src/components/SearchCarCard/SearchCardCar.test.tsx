import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import SearchCardCar from "./index";
import "@testing-library/jest-dom";

describe("SearchCardCar Component", () => {
	const testProps = {
		imgUrl: "https://example.com/image.jpg",
		type: "Sedan",
		rentPerDay: 50,
		description: "This is a test description",
		capacity: 4,
		transmission: "Automatic",
		year: 2023,
		id: "12345",
	};

	test("renders card with correct information", () => {
		render(
			<Router>
				<SearchCardCar {...testProps} />
			</Router>
		);

		// Check if the component renders with the provided props
		expect(screen.getByText(testProps.type)).toBeInTheDocument();
		expect(screen.getByText(`Rp ${testProps.rentPerDay} / Hari`)).toBeInTheDocument();
		expect(screen.getByText(testProps.description)).toBeInTheDocument();
		expect(screen.getByText(`${testProps.capacity} Orang`)).toBeInTheDocument();
		expect(screen.getByText(testProps.transmission)).toBeInTheDocument();
		expect(screen.getByText(`Tahun ${testProps.year}`)).toBeInTheDocument();
	});
});
