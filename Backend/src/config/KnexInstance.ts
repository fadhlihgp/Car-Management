const knexInstance = {
	client: "postgresql",
	connection: {
		// connectionString: process.env.DB_URL,
		database: process.env.DB_NAME || "car-management_db",
		user: process.env.DB_USER || "postgres",
		password: process.env.DB_PASS || "postgres",
	},
};

export default knexInstance;