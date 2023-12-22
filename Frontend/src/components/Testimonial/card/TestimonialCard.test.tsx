import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestimonialCard from "./index";


describe("TestimonialCard Component", () => {
	it("renders with default props", () => {
		const { getByAltText, getByText } = render(<TestimonialCard />);

		const profileImage = getByAltText("profile");

		expect(profileImage).toBeInTheDocument();

		expect(getByText("“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”")).toBeInTheDocument();
		expect(getByText("John Dee 32, Bromo")).toBeInTheDocument();
	});

	// Test-case lain sesuai kebutuhan
});
