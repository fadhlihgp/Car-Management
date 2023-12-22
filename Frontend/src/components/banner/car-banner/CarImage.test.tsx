import React from "react";
import { render, screen } from "@testing-library/react";
import CarImage from "./index";
import "@testing-library/jest-dom";

test("renders car image with correct alt text", () => {
	render(<CarImage />);
	const carImage = screen.getByAltText("car-banner");

	expect(carImage).toBeInTheDocument();

	expect(carImage).toHaveAttribute("src", "https://i.ibb.co/7W5H5Xt/img-car.png");
});
