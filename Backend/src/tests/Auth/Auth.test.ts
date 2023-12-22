import { loginRequestMockData, loginResponseMockData, registerAccountMockData, generateTestToken, currentUserMockData } from "./../mock/MockTest";
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "supertest";
import {app} from "../../index";
import { UnauthorizedException } from "../../exceptions/UnauthorizedException";
import { LoginReqDto } from "../../dtos/AuthDto";
import { BadRequestException } from "../../exceptions/BadRequestException";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const token = generateTestToken();

jest.mock("../../services/AuthService", () => {
	return {
		AuthService: jest.fn().mockImplementation(() => ({
			login: jest.fn((loginRequest: LoginReqDto) => {
				if ((loginRequest.email === loginRequestMockData.email) && 
                (loginRequest.password === loginRequestMockData.password)) {
					return Promise.resolve(loginResponseMockData);
				} else if (!emailRegex.test(loginRequest.email)) {
					throw new BadRequestException("Email not valid");
				} else {
					throw new UnauthorizedException("Login invalid");
					// return Promise.resolve(null);
				}
			}),
			registerCustomer: jest.fn(() => {
				return Promise.resolve();
			}),
			registerAdmin: jest.fn(() => {
				return Promise.resolve();
			}),
			getCurrentUser: jest.fn(() => {
				return Promise.resolve(currentUserMockData);
			})
			// getAll: jest.fn(() => Promise.resolve(carBrandMockData)),
			// getById: jest.fn((id: string) => {
			// 	if (id === "1") {
			// 		return Promise.resolve({ id: "1", name: "Brand1" });
			// 	} else {
			// 		return Promise.resolve(null);
			// 	}
			// }),
			// update: jest.fn((id: string, carBrandReq: any) => {
			// 	const updatedBrand = {
			// 		id: id,
			// 		name: carBrandReq.name,
			// 	};
			// 	return Promise.resolve(updatedBrand);
			// }),
		})),
	};
});
  

  
describe("POST /api/v1/auth/login", () => {
	test("Should successfully login with response status 200 and return data", async () => {
		await request(app)
			.post("/api/v1/auth/login")
			.set("Content-Type", "application/json")
			.send(loginRequestMockData)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
				expect(res.body.data).toEqual(loginResponseMockData);
			});
	});

	test("Should error unauthorized when wrong email or password", async () => {
		const login = {
			email: "test@email.com",
			password: "12345"
		};
		await request(app)
			.post("/api/v1/auth/login")
			.set("Content-Type", "application/json")
			.send(login)
			.then((res: any) => {
				expect(res.statusCode).toBe(401);
			});
	});

	test("Should error bad request when wrong email format is not valid", async () => {
		const login = {
			email: "test@emailcom",
			password: "12345"
		};
		await request(app)
			.post("/api/v1/auth/login")
			.set("Content-Type", "application/json")
			.send(login)
			.then((res: any) => {
				expect(res.statusCode).toBe(400);
			});
	});
});

describe("GET /api/v1/auth/login", () => {
	test("Should error not found when wrong url", async () => {
		await request(app)
			.post("/api/v2/test/loginTestWrong")
			.set("Content-Type", "application/json")
			.send(loginRequestMockData)
			.then((res: any) => {
				console.log(res.error);
				expect(res.statusCode).toBe(404);
			});
	});
});

describe("POST /api/v1/auth/register-customer", () => {
	test("Should register customer with response status 201", async () => {
		await request(app)
			.post("/api/v1/auth/register-customer")
			.set("Content-type", "application/json")
			.send(registerAccountMockData)
			.then((res: any) => {
				expect(res.statusCode).toBe(201);
			});
	});
});

describe("POST /api/v1/auth/register-admin", () => {
	test("Should register admin with response status 201", async () => {
		await request(app)
			.post("/api/v1/auth/register-customer")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.send(registerAccountMockData)
			.then((res: any) => {
				expect(res.statusCode).toBe(201);
			});
	});
});

describe("GET /api/v1/auth/getCurrentUser", () => {
	test("Should get current user with response status 200", async () => {
		await request(app)
			.get("/api/v1/auth/getCurrentUser")
			.set("Content-type", "application/json")
			.set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				expect(res.statusCode).toBe(200);
			});
	});

	test("Should error with response status 401", async () => {
		await request(app)
			.get("/api/v1/auth/getCurrentUser")
			.set("Content-type", "application/json")
			// .set("Authorization", `Bearer ${token}`)
			.then((res: any) => {
				expect(res.statusCode).toBe(401);
			});
	});
});