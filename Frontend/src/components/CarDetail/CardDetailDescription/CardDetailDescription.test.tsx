import React from "react";
import { render, screen } from "@testing-library/react";
import CardDetailDescriptionWrapper from "./index";
import "@testing-library/jest-dom";

describe("CardDetailDescriptionWrapper Component", () => {
	test("renders PackageDetail and OtherDetail components", () => {
		render(<CardDetailDescriptionWrapper />);

		const packageDetail = screen.getByTestId("package-detail");
		expect(packageDetail).toBeInTheDocument();

		const otherDetail = screen.getByTestId("other-detail");
		expect(otherDetail).toBeInTheDocument();
	});
});
