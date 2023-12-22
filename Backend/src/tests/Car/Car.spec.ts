import { carCreateMockData, carUpdateMockData, generateTestToken } from "./../mock/MockTest";
import { carMockData } from "../mock/MockTest";
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "supertest";
import {app} from "../../index";
import { NotFoundException } from "../../exceptions/NotFoundException";

const token: string = generateTestToken();

jest.mock("../../services/CarService", () => {
	return {
		CarService: jest.fn().mockImplementation(() => ({
			create: jest.fn(() => Promise.resolve(carMockData[0])),
			getAll: jest.fn(() => Promise.resolve(carMockData)),
			getById: jest.fn((id: string) => {
				if (id === "1") {
					return Promise.resolve(carMockData[0]);
				} else if (id !== "1") {
					throw new NotFoundException("Car not found");
				} else {
					return Promise.resolve(null);
				}
			}),
			update: jest.fn(() => {
				return Promise.resolve(carUpdateMockData);
			}),
			delete: jest.fn(() => {
				return Promise.resolve();
			})
		})),
	};
});
  

  
describe("Get /api/v1/car", () => {
	test("Should get car with response status 200", async () => {
		await request(app)
			.get("/api/v1/car")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carMockData);
			});
	});
});

describe("GET /api/v1/car/:id", () => {
	test("should get car with response status 200", async () => {
		await request(app)
			.get("/api/v1/car/1")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				if (res.error) {
					console.log(res.error);
				}
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carMockData[0]);
			});
	});

	test("should get get error not found with status code 404", async () => {
		await request(app)
			.get("/api/v1/car/2")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				expect(res.statusCode).toBe(404);
			});
	});

	test("should get error unauthorized car with response status 401", async () => {
		await request(app)
			.get("/api/v1/car/1")
			.set("Content-Type", "application/json")
			.then((res: any) => {
				expect(res.statusCode).toBe(401);
			});
	});
});

describe("POST /api/v1/car", () => {
	test("Should create a new car with response status 201", async () => {
		await request(app)
			.post("/api/v1/car")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(carCreateMockData)
			.then((res: any) => {
				expect(res.statusCode).toBe(201);
			});
	});

	test("Should error create a new car with response status 401", async () => {
		await request(app)
			.post("/api/v1/car")
			.set("Content-type", "application/json")
			.send(carCreateMockData)
			.then((res: any) => {
				expect(res.statusCode).toBe(401);
			});
	});
});

describe("PUT /api/v1/car", () => {
	test("Should update car with response status 200", async () => {
		await request(app)
			.put("/api/v1/car/1")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(carUpdateMockData)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
			});
	});
});

describe("PUT /api/v1/delete/car", () => {
	test("Should delete car with response status 200", async () => {
		await request(app)
			.put("/api/v1/car/delete/1")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			// .send(carUpdateMockData)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
			});
	});
});