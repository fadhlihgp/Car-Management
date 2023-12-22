import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // Untuk fitur ekspektasi tambahan
import TitleDashboard from "./index"; // Sesuaikan path

describe("TitleDashboard Component", () => {
	it("renders with a title correctly", () => {
		const mockTitle = "Dashboard Title";
		const { getByText } = render(<TitleDashboard title={mockTitle} />);

		// Mengecek apakah elemen title dirender dengan benar
		expect(getByText(mockTitle)).toBeInTheDocument();
	});

	// Test-case lain sesuai kebutuhan
});
