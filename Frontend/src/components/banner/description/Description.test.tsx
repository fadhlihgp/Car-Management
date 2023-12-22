import React from "react";
import { render, screen } from "@testing-library/react";
import Description from "./index";
import "@testing-library/jest-dom";

describe("Description Component", () => {
	const customText = /Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam./;

	test("renders with default text", () => {
		render(<Description />);
		const descriptionElement = screen.getByText(customText);

		expect(descriptionElement).toBeInTheDocument();
	});

	test("renders with custom text", () => {
		const customDescription = "This is a custom description.";
		render(<Description text={customDescription} />);
		const customDescriptionElement = screen.getByText(customDescription);

		expect(customDescriptionElement).toBeInTheDocument();
	});

	test("applies description style", () => {
		render(<Description />);
		const descriptionParagraph = screen.getByText(customText);

		expect(descriptionParagraph).toHaveStyle(`
		  font-size: 14px;
		  font-style: normal;
		  font-weight: 300;
		  line-height: 20px;
		`);
	});
});
