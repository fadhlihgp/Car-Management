import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./index";
import "@testing-library/jest-dom";

describe("Title Component", () => {
	const customText = "Sewa & Rental Mobil Terbaik di kawasan Bekasi";

	test("renders with default text", () => {
		render(<Title />);
		const titleElement = screen.getByText(customText);

		expect(titleElement).toBeInTheDocument();
	});

	test("renders with custom text", () => {
		const customTitle = "Custom Title";
		render(<Title text={customTitle} />);
		const customTitleElement = screen.getByText(customTitle);

		expect(customTitleElement).toBeInTheDocument();
	});

	test("applies title style", () => {
		render(<Title />);
		const titleHeading = screen.getByRole("heading", { level: 1 });

		expect(titleHeading).toHaveStyle(`
		  font-size: 36px;
		  font-style: normal;
		  font-weight: 700;
		  line-height: 150%;
    `	);
	});
});
