import { generateTestToken } from "../mock/MockTest";
import { carTransmissionMockData } from "../mock/MockTest";
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "supertest";
import {app} from "../../../index";

const token: string = generateTestToken();

jest.mock("../../services/CarTransmissionService", () => {
	return {
		CarTransmissionService: jest.fn().mockImplementation(() => ({
			create: jest.fn(() => Promise.resolve(carTransmissionMockData[0])),
			getAll: jest.fn(() => Promise.resolve(carTransmissionMockData)),
			getById: jest.fn((id: string) => {
				if (id === "1") {
					return Promise.resolve({ id: "1", name: "Transmission1" });
				} else {
					return Promise.resolve(null);
				}
			}),
			update: jest.fn((id: string, carTransmissionReq: any) => {
				const updatedTransmission = {
					id: id,
					name: carTransmissionReq.name,
				};
				return Promise.resolve(updatedTransmission);
			}),
		})),
	};
});
  

  
describe("Get /api/v1/car-transmission", () => {
	test("Should get car transmission with response status 200", async () => {
		await request(app)
			.get("/api/v1/car-transmission")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carTransmissionMockData);
			});
	});
});

describe("GET /api/v1/car-transmission/:id", () => {
	test("should get car transmission with response status 200", async () => {
		await request(app)
			.get("/api/v1/car-transmission/1")
			.set("Content-Type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				if (res.error) {
					console.log(res.error);
				}
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(carTransmissionMockData[0]);
			});
	});
});

describe("GET /api/v1/car-transmission/:id", () => {
	test("should get error unauthorized car transmission with response status 401", async () => {
		await request(app)
			.get("/api/v1/car-transmission/1")
			.set("Content-Type", "application/json")
			.then((res: any) => {
				expect(res.statusCode).toBe(401);
			});
	});
});

describe("POST /api/v1/car-transmission", () => {
	test("Should create a new car transmission with response status 201", async () => {
		const newCartransmissionData = {
			name: "New transmission"
		};

		await request(app)
			.post("/api/v1/car-transmission")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(newCartransmissionData)
			.then((res: any) => {
				expect(res.statusCode).toBe(201);
			});
	});
});

describe("POST /api/v1/car-transmission", () => {
	test("Should update car transmission with response status 200", async () => {
		const newCartransmissionData = {
			name: "Car transmission Updated"
		};

		await request(app)
			.put("/api/v1/car-transmission/1")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(newCartransmissionData)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
			});
	});
});