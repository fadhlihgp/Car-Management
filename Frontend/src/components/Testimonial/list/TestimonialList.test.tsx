import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestimonialList from "./index";

describe("TestimonialList Component", () => {
	test("renders correctly with list of testimonials", () => {
		const { getAllByAltText, getAllByText } = render(<TestimonialList />);

		const profileImages = getAllByAltText("profile");

		expect(profileImages).toHaveLength(3);

		expect(getAllByText("John Dee 32, Bromo")).toHaveLength(3);
	});
});
