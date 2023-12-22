import React from "react";
import { render, screen } from "@testing-library/react";
import CarCardDetail from "./index";
import "@testing-library/jest-dom";

describe("CarCardDetail Component", () => {
	const mockProps = {
		name: "Car Name",
		type: "SUV",
		price: 100000,
		capacity: 5,
		transmission: "Automatic",
		year: 2023,
		id: "12345",
	};

	test("renders CarCardDetail component with provided props", () => {
		render(<CarCardDetail {...mockProps} />);

		const carName = screen.getByText("Car Name/SUV");
		expect(carName).toBeInTheDocument();

		const capacity = screen.getByText("5 Orang");
		expect(capacity).toBeInTheDocument();

		const transmission = screen.getByText("Automatic");
		expect(transmission).toBeInTheDocument();

		const year = screen.getByText("Tahun 2023");
		expect(year).toBeInTheDocument();

		const price = screen.getByText("Rp 100000");
		expect(price).toBeInTheDocument();

		const continueButton = screen.getByText("Lanjutkan Pembayaran");
		expect(continueButton).toBeInTheDocument();
	});
});
