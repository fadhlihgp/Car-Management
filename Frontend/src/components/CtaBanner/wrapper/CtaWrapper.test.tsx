import { render, screen } from "@testing-library/react";
import CtaWrapper from "./index";
import React from "react";
import "@testing-library/jest-dom";

test("renders CtaWrapper component with CtaContent", () => {
	render(<CtaWrapper />);

	const ctaContentElement = screen.getByText("Sewa Mobil di Bekasi Sekarang");

	expect(ctaContentElement).toBeInTheDocument();
});
