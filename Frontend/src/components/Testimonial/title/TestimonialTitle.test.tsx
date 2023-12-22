import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestimonialTitle from "./index";

describe("TestimonialTitle Component", () => {
	test("renders title and description correctly", () => {
		const { getByText } = render(<TestimonialTitle />);

		const titleElement = getByText("Testimonial");
		expect(titleElement).toBeInTheDocument();

		const descriptionElement = getByText("Berbagai review positif dari para pelanggan kami");
		expect(descriptionElement).toBeInTheDocument();
	});
});
