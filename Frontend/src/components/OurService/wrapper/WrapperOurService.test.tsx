import React from "react";
import { render } from "@testing-library/react";
import WrapperOurService from "./index";
import "@testing-library/jest-dom";

describe("WrapperOurService Component", () => {
	test("renders the WrapperOurService component correctly", () => {
		const { getByText, getByAltText } = render(<WrapperOurService />);

		const titleElement = getByText("Best Car Rental for any kind of trip in Bekasi!");
		const descriptionElement = getByText(
			"Sewa mobil di Bekasi bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll."
		);
		const imageElement = getByAltText("picture");

		expect(titleElement).toBeInTheDocument();
		expect(descriptionElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
	});
});
