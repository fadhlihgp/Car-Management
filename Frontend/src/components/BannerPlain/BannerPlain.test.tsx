import React from "react";
import { render, screen } from "@testing-library/react";
import BannerPlain from "./index";
import "@testing-library/jest-dom";

describe("BannerPlain Component", () => {
	test("renders Container component", () => {
		render(<BannerPlain />);
		const containerElement = screen.getByTestId("banner-container");

		expect(containerElement).toBeInTheDocument();
	});

	test("has background image style", () => {
		render(<BannerPlain />);
		const containerElement = screen.getByTestId("banner-container");

		expect(containerElement).toHaveStyle(`
      background-image: url(https://i.ibb.co/ZS2srHQ/bg.png);
      min-height: 125px;
    `);
	});

	test("has fluid class", () => {
		render(<BannerPlain />);
		const containerElement = screen.getByTestId("banner-container");

		expect(containerElement).toHaveClass("container-fluid");
	});
});
