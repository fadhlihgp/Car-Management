import {render, screen} from "@testing-library/react";
import SubTitleDashboard from "./index";
import React from "react";
import "@testing-library/jest-dom";

describe("SubTitleDashboard Component", () => {

	test("Should have list alt images", () => {
		render(<SubTitleDashboard text={"test"} />);
		const altImage = screen.getByAltText("list");
		expect(altImage).toBeInTheDocument();
	});

	test("Should have text as prop", () => {
		const textProp = "This is prop text";
		render(<SubTitleDashboard text={textProp} />);
		const textRender = screen.getByText(textProp);
		expect(textRender).toBeInTheDocument();
	});
});
