import { generateTestToken } from "./../mock/MockTest";
import { carTypeMockData } from "../mock/MockTest";
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "supertest";
import {app} from "../../index";

const token: string = generateTestToken();

jest.mock("../../services/CarTypeService", () => {
	return {
		CarTypeService: jest.fn().mockImplementation(() => ({
			create: jest.fn(() => Promise.resolve(carTypeMockData[0])),
			getAll: jest.fn(() => Promise.resolve(carTypeMockData)),
			getById: jest.fn((id: string) => {
				if (id === "1") {
					return Promise.resolve({ id: "1", name: "Type1" });
				} else {
					return Promise.resolve(null);
				}
			}),
			update: jest.fn((id: string, cartypeReq: any) => {
				const updatedtype = {
					id: id,
					name: cartypeReq.name,
				};
				return Promise.resolve(updatedtype);
			}),
		})),
	};
});
  

  
describe("Get /api/v1/car-type", () => {
	test("Should get car type with response status 200", async () => {
		await request(app)
			.get("/api/v1/car-type")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carTypeMockData);
			});
	});
});

describe("GET /api/v1/car-type/:id", () => {
	test("should get car type with response status 200", async () => {
		await request(app)
			.get("/api/v1/car-type/1")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				if (res.error) {
					console.log(res.error);
				}
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carTypeMockData[0]);
			});
	});
});

describe("GET /api/v1/car-type/:id", () => {
	test("should get error unauthorized car type with response status 401", async () => {
		await request(app)
			.get("/api/v1/car-type/1")
			.set("Content-Type", "application/json")
			.then((res: any) => {
				expect(res.statusCode).toBe(401);
			});
	});
});

describe("POST /api/v1/car-type", () => {
	test("Should create a new car type with response status 201", async () => {
		const newCarTypeData = {
			name: "New type"
		};

		await request(app)
			.post("/api/v1/car-type")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(newCarTypeData)
			.then((res: any) => {
				expect(res.statusCode).toBe(201);
			});
	});
});

describe("POST /api/v1/car-type", () => {
	test("Should update car type with response status 200", async () => {
		const newCarTypeData = {
			name: "Car type Updated"
		};

		await request(app)
			.put("/api/v1/car-type/1")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(newCarTypeData)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
			});
	});
});