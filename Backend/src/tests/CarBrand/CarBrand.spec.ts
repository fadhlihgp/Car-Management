import { generateTestToken } from "./../mock/MockTest";
import { carBrandMockData } from "../mock/MockTest";
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "supertest";
import {app} from "../../index";

const token: string = generateTestToken();

jest.mock("../../services/CarBrandService", () => {
	return {
		CarBrandService: jest.fn().mockImplementation(() => ({
			create: jest.fn(() => Promise.resolve(carBrandMockData[0])),
			getAll: jest.fn(() => Promise.resolve(carBrandMockData)),
			getById: jest.fn((id: string) => {
				if (id === "1") {
					return Promise.resolve({ id: "1", name: "Brand1" });
				} else {
					return Promise.resolve(null);
				}
			}),
			update: jest.fn((id: string, carBrandReq: any) => {
				const updatedBrand = {
					id: id,
					name: carBrandReq.name,
				};
				return Promise.resolve(updatedBrand);
			}),
		})),
	};
});
  

  
describe("Get /api/v1/car-brand", () => {
	test("Should get car brand with response status 200", async () => {
		await request(app)
			.get("/api/v1/car-brand")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carBrandMockData);
			});
	});
});

describe("GET /api/v1/car-brand/:id", () => {
	test("should get car brand with response status 200", async () => {
		await request(app)
			.get("/api/v1/car-brand/1")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				if (res.error) {
					console.log(res.error);
				}
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carBrandMockData[0]);
			});
	});
});

describe("GET /api/v1/car-brand/:id", () => {
	test("should get error unauthorized car brand with response status 401", async () => {
		await request(app)
			.get("/api/v1/car-brand/1")
			.set("Content-Type", "application/json")
			.then((res: any) => {
				expect(res.statusCode).toBe(401);
			});
	});
});

describe("POST /api/v1/car-brand", () => {
	test("Should create a new car brand with response status 201", async () => {
		const newCarBrandData = {
			name: "New Brand"
		};

		await request(app)
			.post("/api/v1/car-brand")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(newCarBrandData)
			.then((res: any) => {
				expect(res.statusCode).toBe(201);
			});
	});
});

describe("POST /api/v1/car-brand", () => {
	test("Should update car brand with response status 200", async () => {
		const newCarBrandData = {
			name: "Car Brand Updated"
		};

		await request(app)
			.put("/api/v1/car-brand/1")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(newCarBrandData)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
			});
	});
});