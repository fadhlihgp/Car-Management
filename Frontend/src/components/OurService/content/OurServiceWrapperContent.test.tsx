import React from "react";
import { render, screen } from "@testing-library/react";
import OurServiceWrapperContent from "./index";
import "@testing-library/jest-dom";

// Mocking the Icon component

describe("OurServiceWrapperContent Component", () => {
	test("renders title, description, and list items correctly", () => {
		render(<OurServiceWrapperContent />);

		expect(screen.getByText(/Best Car Rental for any kind of trip in Bekasi!/i)).toBeInTheDocument();

		expect(screen.getByText(/Sewa mobil di Bekasi bersama Binar Car Rental/i)).toBeInTheDocument();

	});
});
