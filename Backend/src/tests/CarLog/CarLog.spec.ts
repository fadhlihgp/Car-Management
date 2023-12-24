import { carLogCreateMockData, generateTestToken } from "./../mock/MockTest";
import { carLogMockData } from "../mock/MockTest";
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "supertest";
import {app} from "../../../index";

const token: string = generateTestToken();

jest.mock("../../services/CarLogService", () => {
	return {
		CarLogService: jest.fn().mockImplementation(() => ({
			createCarLog: jest.fn(() => Promise.resolve(carLogCreateMockData)),
			getAllCarLogs: jest.fn(() => Promise.resolve(carLogMockData)),
		})),
	};
});
  

  
describe("Get /api/v1/car-log", () => {
	test("Should get car log with response status 200", async () => {
		await request(app)
			.get("/api/v1/car-log")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carLogMockData);
			});
	});
});