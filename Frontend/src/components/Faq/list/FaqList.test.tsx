import React from "react";
import { render, screen } from "@testing-library/react";
import FaqList from "./index";
import "@testing-library/jest-dom";

// Mock the FaqAccordion component
jest.mock("../accordion", () => {
	return function MockFaqAccordion({ headerText, bodyText }: { headerText: string; bodyText: string }) {
		return (
			<div>
				<div>{headerText}</div>
				<div>{bodyText}</div>
			</div>
		);
	};
});

describe("FaqList component", () => {
	test("renders FaqList with FAQ items", () => {
		render(<FaqList />);

		const bodies = screen.getAllByText(/Placeholder content for this accordion/i);

		expect(bodies).toHaveLength(5);
	});
});
