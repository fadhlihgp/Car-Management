import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import TestimonialButton from "./index";

describe("TestimonialButton Component", () => {
	it("renders both buttons correctly", () => {
		const onClickMock = jest.fn();

		const { getByAltText } = render(<TestimonialButton onclick={onClickMock} />);

		const leftButton = getByAltText("leftbutton");
		const rightButton = getByAltText("righbutton");

		expect(leftButton).toBeInTheDocument();
		expect(rightButton).toBeInTheDocument();

	});
});
