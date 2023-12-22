import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardSidebar from "./index";
import "@testing-library/jest-dom";

describe("CardSidebar", () => {
	it("renders CardSidebar component", () => {
		const props = {
			icon: "path/to/icon.png",
			text: "Home",
		};

		const { getByText, getByAltText } = render(<CardSidebar {...props} />);

		const textElement = getByText("Home");
		const iconElement = getByAltText("home");

		expect(textElement).toBeInTheDocument();
		expect(iconElement).toBeInTheDocument();
	});

	it("changes styles on hover", () => {
		const props = {
			icon: "path/to/icon.png",
			text: "Home",
		};

		const { getByText, container } = render(<CardSidebar {...props} />);

		const cardSidebar = getByText("Home");

		fireEvent.mouseEnter(cardSidebar);
		expect(container.firstChild).toHaveStyle("background: rgba(255, 255, 255, 0.3)");
		expect(container.firstChild).toHaveStyle("fontWeight: 700");

		fireEvent.mouseLeave(cardSidebar);
		expect(container.firstChild).toHaveStyle("background: none");
		expect(container.firstChild).toHaveStyle("fontWeight: 400");
	});
});
