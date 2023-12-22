import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Hamburger from "./index";
import "@testing-library/jest-dom";

describe("Hamburger Component", () => {
	it("renders the Hamburger component correctly", () => {
		const handleOnClickMock = jest.fn();
		const { getByRole } = render(<Hamburger handleOnClick={handleOnClickMock} />);

		const hamburgerButton = getByRole("button");

		fireEvent.click(hamburgerButton);
		expect(handleOnClickMock).toHaveBeenCalledTimes(1);
	});
});
