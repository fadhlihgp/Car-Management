import { render } from "@testing-library/react";
import WhyUsWrapper from "./index";
import React from "react";
import "@testing-library/jest-dom";

describe("WhyUsWrapper Component", () => {
	it("renders WhyUsTitle and WhyUsList components correctly", () => {
		const { getByText } = render(<WhyUsWrapper />);

		const whyUsTitleElement = getByText("Why Us ?");
		expect(whyUsTitleElement).toBeInTheDocument();

		const whyUsListElement = getByText("Kenapa harus memilih Binar Car Rental?");
		expect(whyUsListElement).toBeInTheDocument();
	});
});
