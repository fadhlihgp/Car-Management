import {render, screen} from "@testing-library/react";
import NavLogo from "./index";
import React from "react";
import "@testing-library/jest-dom";

describe("NavLogo Component", () => {
	test("Should render image", () => {
		render(<NavLogo />);
		const altImg = screen.getByAltText("logo");
		expect(altImg).toBeInTheDocument();
	});
});
