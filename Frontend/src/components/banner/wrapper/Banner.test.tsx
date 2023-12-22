import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./index";
import "@testing-library/jest-dom";

describe("Banner Component", () => {
	const mockChildren = <div>Mock Children Component</div>;

	test("renders children component", () => {
		render(<Banner>{mockChildren}</Banner>);
		const childrenComponent = screen.getByText("Mock Children Component");

		expect(childrenComponent).toBeInTheDocument();
	});

	test("renders CarImage component", () => {
		render(<Banner />);
		const carImageComponent = screen.getByAltText("car-banner");

		expect(carImageComponent).toBeInTheDocument();
	});

});
