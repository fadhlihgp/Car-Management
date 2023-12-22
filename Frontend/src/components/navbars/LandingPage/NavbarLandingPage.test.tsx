import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // For additional matchers
import { BrowserRouter as Router } from "react-router-dom";

import NavbarLandingPage from "./index"; // Update the path to your NavbarLandingPage component

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

describe("NavbarLandingPage component", () => {
	test("renders NavbarLandingPage with Navbar elements", () => {
		render(
			<Router>
				<NavbarLandingPage>
					<div>This is navbar</div>
				</NavbarLandingPage>
			</Router>
		);

		// Ensure Navbar elements are rendered
		expect(screen.getByRole("navigation")).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /our service/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /why us/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /testimonial/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /faq/i })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();

		// You can perform additional assertions if needed
		// For example: Check for specific text content or attributes
		expect(screen.getByText("BCR")).toBeInTheDocument();
		expect(screen.getByAltText("logo")).toBeInTheDocument();
	});
});
