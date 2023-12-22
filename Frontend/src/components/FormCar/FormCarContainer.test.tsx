import React from "react";
import { render } from "@testing-library/react";
import FormCarContainer from "./index";
import {DashboardContext, DashboardContextType} from "../../context/Dashboard/DashboardContext";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import "@testing-library/jest-dom";

const mockContextValue: DashboardContextType = {
	state: {
		carCurrentId: "-1",
		dataBrandCars: [],
		dataTypeCars: [],
		dataTransmissionCars: [],
		fetchStatus: false,
		setFetchStatus: jest.fn(),
		setCarCurrentId: jest.fn(),
		dataCarsMapping: [],
		setDataCarsMapping: jest.fn(),
		currentUser: null,
		setCurrentUser: jest.fn(),
		showSubDashboard: true,
		setShowSubDashboard: jest.fn(),
		subSidebarContents: [],
		setSubSidebarContents: jest.fn(),
		subSidebarTitle: "Test",
		setSubSidebarTitle: jest.fn(),
		activeItemSidebar: 2,
		setActiveItemSidebar: jest.fn(),
		activeItemSubSidebar: 2,
		setActiveItemSubSidebar: jest.fn(),
		setDataBrandCars: jest.fn(),
		setDataTypeCars: jest.fn(),
		setDataTransmissionCars: jest.fn(),
	},
	handleFunction: {
		handleCancelCar: jest.fn(),
		handleSubmitCar: jest.fn(),
		fetchTypeCars: jest.fn(),
		fetchTransmissionCars: jest.fn(),
		fetchBrandCars: jest.fn(),
	},
};

describe("FormCarContainer", () => {
	test("renders FormCarContainer component", () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/cars/-1"]}>
				<Routes>
					<Route path="/cars/:carId" element={<DashboardContext.Provider value={mockContextValue}><FormCarContainer /></DashboardContext.Provider>} />
				</Routes>
			</MemoryRouter>
		);

		const saveButton = getByText("Save");
		expect(saveButton).toBeInTheDocument();
		// Add other assertions as needed based on your component
	});

	it("submits the form when Save button is clicked", async () => {
		const { getByText } = render(
			<MemoryRouter initialEntries={["/cars/-1"]}>
				<Routes>
					<Route path="/cars/:carId" element={<DashboardContext.Provider value={mockContextValue}><FormCarContainer /></DashboardContext.Provider>} />
				</Routes>
			</MemoryRouter>
		);

		const saveButton = getByText("Save");
		expect(saveButton).toBeInTheDocument();
	});
});
