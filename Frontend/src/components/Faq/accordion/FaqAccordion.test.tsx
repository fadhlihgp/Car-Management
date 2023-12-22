import React from "react";
import { render, screen } from "@testing-library/react";
import FaqAccordion from "./index";
import "@testing-library/jest-dom";

test("renders FaqAccordion component with header and body text", () => {
	const testHeaderText = "Test Header";
	const testBodyText = "Test Body";

	render(
		<FaqAccordion key="1" headerText={testHeaderText} bodyText={testBodyText} />
	);

	const headerElement = screen.getByText(testHeaderText);
	expect(headerElement).toBeInTheDocument();

	const bodyElement = screen.getByText(testBodyText);
	expect(bodyElement).toBeInTheDocument();
});

test("renders FaqAccordion component with default body text", () => {
	const testHeaderText = "Test Header";

	render(
		<FaqAccordion key="1" headerText={testHeaderText} />
	);

	const headerElement = screen.getByText(testHeaderText);
	expect(headerElement).toBeInTheDocument();

	const defaultBodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
	const defaultBodyElement = screen.getByText(defaultBodyText);
	expect(defaultBodyElement).toBeInTheDocument();
});
