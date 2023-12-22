import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonCustom from "./index";
import "@testing-library/jest-dom";

describe("ButtonCustom Component", () => {
	test("renders button with default text", () => {
		render(<ButtonCustom />);
		const buttonElement = screen.getByText("Klik Button");
		expect(buttonElement).toBeInTheDocument();
	});

	test("renders button with custom text", () => {
		render(<ButtonCustom name="Custom Button" />);
		const buttonElement = screen.getByText("Custom Button");
		expect(buttonElement).toBeInTheDocument();
	});

	test("renders button with specified color", () => {
		render(<ButtonCustom color="#ff0000" />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveStyle("background-color: #ff0000");
	});

	test("onClick callback when button is clicked", () => {
		const handleClick = jest.fn();
		render(<ButtonCustom onClick={handleClick} />);
		const buttonElement = screen.getByRole("button");
		fireEvent.click(buttonElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
