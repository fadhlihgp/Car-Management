import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BreadcrumpComponent from "./index";
import {BreadcrumpComponentProps} from "./BreadcrumpComponentProps";
import "@testing-library/jest-dom";

const mockPaths: BreadcrumpComponentProps = {
	paths: [
		{ link: "/home", text: "Home" },
		{ link: "/cars", text: "Cars" },
		{ link: "/cars/item", text: "Item" }
	]
};

const setup = ({paths}: BreadcrumpComponentProps) => {
	render(
		<MemoryRouter>
			<BreadcrumpComponent paths={paths} />
		</MemoryRouter>
	);
};

describe("BreadcrumpComponent", () => {
	test("renders Breadcrumb component", () => {
		setup(mockPaths);
		const breadcrumbElement = screen.getByRole("navigation");
		expect(breadcrumbElement).toBeInTheDocument();
	});

	test("renders correct breadcrumb links", () => {
		setup(mockPaths);
		const breadcrumbLinks = screen.getAllByRole("link");
		expect(breadcrumbLinks).toHaveLength(2);
		expect(breadcrumbLinks[0]).toHaveAttribute("href", "/home");
		expect(breadcrumbLinks[1]).toHaveAttribute("href", "/cars");
	});

	test("renders last breadcrumb item as text when active", () => {
		setup(mockPaths);
		const lastBreadcrumb = screen.getByText("Item");
		expect(lastBreadcrumb).toBeInTheDocument();
		expect(lastBreadcrumb.tagName).toBe("SPAN");
	});
});
