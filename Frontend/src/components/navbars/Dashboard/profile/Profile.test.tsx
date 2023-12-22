import React from "react";
import {render} from "@testing-library/react";
import Profile from "./index";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

describe("Profile component", () => {
	test("renders with default props", () => {
		const { getByAltText, getByText } = render(<Profile />);

		expect(getByText("Unis Badri")).toBeInTheDocument();

		expect(getByAltText("profileImage")).toBeInTheDocument();
	});
});
