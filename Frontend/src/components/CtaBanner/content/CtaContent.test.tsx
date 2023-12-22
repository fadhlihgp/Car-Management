import { render, screen } from "@testing-library/react";
import CtaContent from "./index";
import React from "react";
import "@testing-library/jest-dom";

test("renders CtaContent component", () => {
	render(<CtaContent />);
	const headingElement = screen.getByText("Sewa Mobil di Bekasi Sekarang");
	const paragraphElement = screen.getByText(
		/Lorem ipsum dolor sit amet, consectetur adipiscing elit./
	);
	const buttonElement = screen.getByRole("button", { name: "Mulai Sewa Mobil" });

	expect(headingElement).toBeInTheDocument();
	expect(paragraphElement).toBeInTheDocument();
	expect(buttonElement).toBeInTheDocument();
});
