import jwt from "jsonwebtoken";
export const carBrandMockData = [
	{ id: "1", name: "Brand1" },
	{ id: "2", name: "Brand2" }
];

export const carsMockData = [{
	"id": "03b0b8c3-d084-4257-9ea0-c4638bbc4f67",
	"name": "Toyota Rush",
	"price": "4000000.00",
	"year": 2022,
	"size": "Large",
	"availability": true,
	"capacity": 6,
	"description": "Mobil bagus cooy",
	"pictureUrl": "http://res.cloudinary.com/do5gw4vcx/image/upload/v1702015926/lphxcasnm8l2hybt2uzx.png",
	"startRent": "2023-12-08T06:12:06.848Z",
	"finishRent": "2023-12-08T06:12:06.848Z",
	"availableAt": "2023-12-08T13:12:06.770Z",
	"createdAt": "2023-12-08T06:12:06.848Z",
	"createdById": "1cb69048-68be-474a-bef8-bff01052615c",
	"updatedAt": "2023-12-09T07:17:57.027Z",
	"updatedById": "1cb69048-68be-474a-bef8-bff01052615c",
	"isDeleted": false,
	"deletedAt": null,
	"deletedById": null,
	"carBrandId": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
	"carTypeId": "a36863c8-00d5-4c32-bae3-4ef8b13292d1",
	"carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
	"carBrand": {
		"id": "a084a9d2-0c01-4832-bfc1-39ded8b13769",
		"name": "Toyota"
	},
	"carTransmission": {
		"id": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
		"name": "Manual"
	},
	"carType": {
		"id": "a36863c8-00d5-4c32-bae3-4ef8b13292d1",
		"name": "Wagon"
	},
	"createdBy": {
		"id": "1cb69048-68be-474a-bef8-bff01052615c",
		"fullName": "Super Admin",
		"username": "superadmin"
	},
	"updatedBy": {
		"id": "1cb69048-68be-474a-bef8-bff01052615c",
		"fullName": "Super Admin",
		"username": "superadmin"
	},
	"deletedBy": null
},
];

export const carTransmissionMockData = [
	{ id: "1", name: "Transmission1" },
	{ id: "2", name: "Transmission" }
];

export const carTypeMockData = [
	{ id: "1", name: "Type1" },
	{ id: "2", name: "Type2" }
];

export const carMockData =  [
	{
		"id": "1",
		"name": "string",
		"price": 250000,
		"year": 2019,
		"size": "Medium",
		"availability": true,
		"capacity": 6,
		"description": "string",
		"pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
		"availableAt": "2023-11-17T16:31:22.010Z",
		"createdAt": "2023-11-17T16:31:22.010Z",
		"createdById": "1cb69048-68be-474a-bef8-bff0105261aa",
		"isDeleted": false,
		"carBrandId": "1cb69048-68be-474a-bef8-bff0105261aa",
		"carTypeId": "1cb69048-68be-474a-bef8-bff0105261aa",
		"carTransmissionId": "1cb69048-68be-474a-bef8-bff0105261aa",
		"carBrand": {
			"id": "string",
			"name": "string"
		},
		"carTransmission": {
			"id": "string",
			"name": "string"
		},
		"carType": {
			"id": "string",
			"name": "string"
		},
		"deletedBy": {
			"id": "string",
			"fullName": "string",
			"userName": "string"
		},
		"createdBy": {
			"id": "string",
			"fullName": "string",
			"userName": "string"
		},
		"updatedBy": {
			"id": "string",
			"fullName": "string",
			"userName": "string"
		}
	}
];

export const carUpdateMockData = {
	"name": "Toyota avanza",
	"price": 300000,
	"year": 2019,
	"size": "Large",
	"availability": true,
	"availableAt": "2023-11-09",
	"capacity": 6,
	"description": "Avanza new car",
	"pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
	"carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
	"carBrandId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfaa",
	"carTypeId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfdd"
};

export const carCreateMockData = {
	"name": "Toyota avanza",
	"price": 300000,
	"year": 2019,
	"size": "Large",
	"availability": true,
	"availableAt": "2023-11-09",
	"capacity": 6,
	"description": "Avanza new car",
	"pictureUrl": "https://cars.usnews.com/static/images/Auto/izmo/Colors/audi_14ttscoupe2a_volcanoredmetallic.jpg",
	"carTransmissionId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfcc",
	"carBrandId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfaa",
	"carTypeId": "adb110d8-0ff0-45cc-a2ee-f5232b78cfdd"
};

export const carLogCreateMockData = {
	action: "Create",
	date: new Date(),
	accountId: "1212",
	carId: "1111"
};

export const carLogMockData = [
	{
		"id": "56eadb08-6483-4a14-9587-cb7e33369e11",
		"action": "Create",
		"accountId": "56eadb08-6483-4a14-9587-cb7e33369e00",
		"carId": "56eadb08-6483-4a14-9587-cb7e33369e12",
		"date": "2023-11-18T14:43:08.274Z",
		"account": {
			"id": "56eadb08-6483-4a14-9587-cb7e33361275",
			"fullName": "Admin 1",
			"username": "admin1",
			"email": "admin1@example.com",
			"roleId": "2"
		},
		"car": {
			"id": "56eadb08-6483-4114-9587-cb7e33369e75",
			"name": "Toyota avanza",
			"price": 300000,
			"year": 2019,
			"capacity": 6
		}
	}
];

export const loginRequestMockData = {
	email: "superadmin@test.com",
	password: "superadmin1234/"
};

export const loginResponseMockData = {
	email: "superadmin@test.com",
	role: "SuperAdmin",
	token: "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp"
};

export const registerAccountMockData = {
	"fullName": "Your fullname",
	"address": "Your address",
	"phone": "08211982",
	"birthDate": "2000-02-25",
	"username": "username",
	"email": "user@example.com",
	"password": "password123/"
};

export const payloadToken = {
	Email: "superadmin@test.com",
	UserName: "SuperAdminTest",
	Role: "SuperAdmin",
	RoleId: "1",
	AccountId: "1212",
};

export const generateTestToken = (): string => {
	const payload = {
		Email: "superadmin@test.com",
		UserName: "SuperAdminTest",
		Role: "SuperAdmin",
		RoleId: "1",
		AccountId: "1212",
	};
  
	const secretKey = process.env.JWT_SECRET_KEY || "secret"; 
	const token = jwt.sign(payload, secretKey, { expiresIn: "48h" });
	return token;
};

export const currentUserMockData =  {
	"id": "1212",
	"fullName": "Your Fullname",
	"address": "Your address",
	"phone": "08211982",
	"birthDate": "2000-11-17T07:00:00.000Z",
	"createdAt": "2023-11-24T12:41:59.851Z",
	"username": "SuperAdminTest",
	"email": "superadmin@test.com",
	"password": "-",
	"pictureUrl": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
	"roleId": "3"
};