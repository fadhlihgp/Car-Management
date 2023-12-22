import React from "react";
import { render } from "@testing-library/react";
import OurServiceImage from "./index";
import "@testing-library/jest-dom";


describe("OurServiceImage Component", () => {
	it("renders the image correctly", () => {
		const { getByAltText } = render(<OurServiceImage />);

		// Check if the image is rendered
		const imageElement = getByAltText("picture");
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute("src", "https://i.ibb.co/SywnsjB/img-service.png");
		expect(imageElement).toHaveClass("w-75");
	});
});
