import {render, screen} from "@testing-library/react";
import FaqWrapper from "./index";
import React from "react";
import "@testing-library/jest-dom";
describe("FaqWrapper Component", () => {
	test("Should return faqwrapper correctly", () => {
		render(<FaqWrapper />);

		const titleElement = screen.getByText("Frequently Asked Question");

		expect(titleElement).toHaveStyle("font-size: 24px");
		expect(titleElement).toHaveStyle("font-weight: 700");
		expect(titleElement).toHaveStyle("line-height: 36px");
		expect(titleElement).toBeInTheDocument();
	});
});
