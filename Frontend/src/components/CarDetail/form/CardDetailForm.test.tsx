import React from "react";
import { render, screen } from "@testing-library/react";
import CardDetailForm from "./index";
import "@testing-library/jest-dom";

describe("CardDetailForm Component", () => {
	test("renders form with proper input fields and labels", () => {
		render(<CardDetailForm />);

		const typeDriverLabel = screen.getByLabelText("Tipe Driver");
		expect(typeDriverLabel).toBeInTheDocument();

		const typeDriverSelect = screen.getByRole("combobox", { name: "Tipe Driver" });
		expect(typeDriverSelect).toBeInTheDocument();
		expect(typeDriverSelect).toBeDisabled();

		const tanggalLabel = screen.getByLabelText("Tanggal");
		expect(tanggalLabel).toBeInTheDocument();

		const tanggalInput = screen.getByRole("textbox", { name: "Tanggal" });
		expect(tanggalInput).toBeInTheDocument();
		expect(tanggalInput).toBeDisabled();

		const waktuLabel = screen.getByLabelText("Waktu Jemput/Ambil");
		expect(waktuLabel).toBeInTheDocument();

		const waktuSelect = screen.getByRole("combobox", { name: "Waktu Jemput/Ambil" });
		expect(waktuSelect).toBeInTheDocument();
		expect(waktuSelect).toBeDisabled();

		const jumlahPenumpangLabel = screen.getByLabelText("Jumlah Penumpang");
		expect(jumlahPenumpangLabel).toBeInTheDocument();

		const jumlahPenumpangInput = screen.getByRole("textbox", { name: "Jumlah Penumpang" });
		expect(jumlahPenumpangInput).toBeInTheDocument();
		expect(jumlahPenumpangInput).toBeDisabled();
	});

});
