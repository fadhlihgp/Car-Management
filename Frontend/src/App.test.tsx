import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import "@testing-library/jest-dom";

// setupTests.js
Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
	})),
});

test("renders landing page content", () => {
	render(<App />);
	const landingPageElement = screen.getByText("BCR");
	expect(landingPageElement).toBeInTheDocument();
});
