import {render, screen} from "@testing-library/react";
import SpinnerLoading from "./index";
import React from "react";
import "@testing-library/jest-dom";
describe("SpinnerLoading Component", () => {
	test("Should show Loading as default text", () => {
		render(<SpinnerLoading />);
		const textDefault = "Loading";
		const renderSpinner = screen.getByText(textDefault);
		expect(renderSpinner).toBeInTheDocument();
	});

	test("Should show custom loading text", () => {
		const customText = "Menyimpan data";
		render(<SpinnerLoading text={customText} />);
		const renderSpinner = screen.getByText(customText);
		expect(renderSpinner).toBeInTheDocument();
	});
});
