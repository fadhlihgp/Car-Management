import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestimonialWrapper from "./index";

describe("TestimonialWrapper Component", () => {
	test("renders TestimonialTitle, TestimonialList, and TestimonialButton", () => {
		const { getByText } = render(<TestimonialWrapper />);

		const titleElement = getByText("Testimonial");
		expect(titleElement).toBeInTheDocument();
	});
});
