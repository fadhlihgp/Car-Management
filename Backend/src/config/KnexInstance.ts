const knexInstance = {
	client: "postgresql",
	connection: {
		host: "binar-car-db.internal",
		port: 5432,
		database: process.env.DB_NAME || "binar_car_backend",
		user: process.env.DB_USER || "postgres",
		password: process.env.DB_PASS || "Hf1kNwe3TY5sDia",
	},
};

export default knexInstance;