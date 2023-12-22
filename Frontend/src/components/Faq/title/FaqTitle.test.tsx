import React from "react";
import { render, screen } from "@testing-library/react";
import FaqTitle from "./index";
import "@testing-library/jest-dom";

describe("FaqTitle component", () => {
	test("renders the FAQ title and description", () => {
		render(<FaqTitle />);

		const titleElement = screen.getByRole("heading", { level: 2 });
		const descriptionElement = screen.getByText(/Lorem ipsum dolor sit amet/i);

		expect(titleElement).toBeInTheDocument();
		expect(descriptionElement).toBeInTheDocument();
		expect(titleElement).toHaveStyle(`
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
    `);
	});
});
