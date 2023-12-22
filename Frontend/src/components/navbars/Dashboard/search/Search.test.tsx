import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import Search from "./index";
import {DashboardContext, DashboardContextType} from "../../../../context/Dashboard/DashboardContext";
import "@testing-library/jest-dom";
const mockAxios = new MockAdapter(axios);

describe("Search Component", () => {
	afterEach(() => {
		mockAxios.reset();
	});

	test("performs search on button click", async () => {
		const mockFetchDataCars = jest.fn();
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
				fetchDataCars: mockFetchDataCars,
			},
		};

		const TestComponent = () => {
			const location = useLocation();
			return (
				<DashboardContext.Provider value={mockContextValue}>
					<Search />
					<span data-testid="location-pathname">{location.pathname}?name=searchTerm</span>
				</DashboardContext.Provider>
			);
		};

		const { getByText, getByPlaceholderText, getByTestId } = render(
			<MemoryRouter initialEntries={["/some-route"]}>
				<Routes>
					<Route path="/:currentRoute" element={<TestComponent />} />
				</Routes>
			</MemoryRouter>
		);

		const searchInput = getByPlaceholderText("Search");
		fireEvent.change(searchInput, { target: { value: "searchTerm" } });

		const searchButton = getByText("Search");
		fireEvent.click(searchButton);

		await waitFor(() => {
			expect(getByTestId("location-pathname")).toHaveTextContent("/some-route?name=searchTerm");
			expect(mockFetchDataCars).toHaveBeenCalledWith("?name=searchTerm");
		});
	});
});
