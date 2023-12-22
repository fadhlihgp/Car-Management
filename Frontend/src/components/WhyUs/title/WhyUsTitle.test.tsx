import { render } from "@testing-library/react";
import WhyUsTitle from "./index";
import React from "react";
import "@testing-library/jest-dom";

describe("WhyUsTitle Component", () => {
	it("renders title and subtitle correctly", () => {
		const { getByText } = render(<WhyUsTitle />);

		const titleElement = getByText("Why Us ?");
		expect(titleElement).toBeInTheDocument();
		expect(titleElement.tagName).toBe("H1");
		expect(titleElement).toHaveStyle("font-size: 36px");
		expect(titleElement).toHaveStyle("font-weight: 700");

		const subtitleElement = getByText("Kenapa harus memilih Binar Car Rental?");
		expect(subtitleElement).toBeInTheDocument();
		expect(subtitleElement.tagName).toBe("P");
		expect(subtitleElement).toHaveClass("mt-4");

	});
});
