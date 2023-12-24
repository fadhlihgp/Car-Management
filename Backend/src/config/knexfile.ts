import type { Knex } from "knex";
import path from "path";

// Update with your config settings.

const configg: { [key: string]: Knex.Config } = {
	development: {
		client: "postgresql",
		connection: {
			host: "binar-car-db.internal",
			port: 5432,
			database: process.env.DB_NAME || "binar_car_backend",
			user: process.env.DB_USER || "postgres",
			password: process.env.DB_PASS || "Hf1kNwe3TY5sDia",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: path.join(__dirname, "migrations"),
			tableName: "knex_migrations",
		},
		seeds: {
			directory: path.join(__dirname, "seeds"),
		},
	},

	production: {
		client: "postgresql",
		connection: {
			database: process.env.DB_NAME || "binar_car_backend",
			user: process.env.DB_USER || "postgres",
			password: process.env.DB_PASS || "Hf1kNwe3TY5sDia",
			port: 15432
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};

module.exports = configg;
