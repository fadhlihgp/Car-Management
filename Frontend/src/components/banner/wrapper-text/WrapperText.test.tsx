import {render, screen} from "@testing-library/react";
import WrapperText from "./index";
import React from "react";
import "@testing-library/jest-dom";

describe("WrapperText Component", () => {
	const mockChildren = <div>Mock Children Component</div>;
	test("renders children component", () => {
		render(<WrapperText>{mockChildren}</WrapperText>);

		const childrenComponent = screen.getByText("Mock Children Component");

		expect(childrenComponent).toBeInTheDocument();
	});
});
