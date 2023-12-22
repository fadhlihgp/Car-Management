import { Request, Response } from "express";
import { BadRequestException } from "../exceptions/BadRequestException";
import uploadService from "../services/UploadService";

jest.mock("cloudinary");

describe("Upload Service", () => {
	it("should return 400 if file is not provided", () => {
		const req = {} as Request;
		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		} as unknown as Response;

		expect(() => uploadService(req, res)).toThrowError(BadRequestException);
	});
});
