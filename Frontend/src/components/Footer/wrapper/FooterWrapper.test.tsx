import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import FooterWrapper from "./index";

describe("FooterWrapper component", () => {
	test("renders FooterWrapper with Card components", () => {
		render(<FooterWrapper />);

		expect(screen.getByText("binarcarrental@gmail.com")).toBeInTheDocument();
		expect(screen.getByText("Testimonial")).toBeInTheDocument();
		expect(screen.getByText("Connect With Us")).toBeInTheDocument();
		expect(screen.getByText("Copyright Binar 2023")).toBeInTheDocument();

		// You can add more assertions if needed
	});
});
