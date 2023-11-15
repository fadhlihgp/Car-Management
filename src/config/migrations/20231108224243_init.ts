import { Knex } from "knex";
const { v4: uuidv4 } = require("uuid");


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists("car_brand", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("name", 255).notNullable();
    })
    .createTableIfNotExists("car_type", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("name", 255).notNullable();
    })
    .createTableIfNotExists("car_transmission", (table: Knex.TableBuilder) => {
        table.string("id", 255).notNullable().primary();
        table.string("name", 255).notNullable();
    })
    .createTableIfNotExists("role", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("name", 255).notNullable();
    })
    .createTableIfNotExists("account", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("fullName", 255).notNullable();
      table.text("address").notNullable();
      table.string("phone", 255).notNullable();
      table.timestamp("birthDate", { useTz: true })
      table.string("username", 255).unique().notNullable();
      table.string("email", 255).unique().notNullable();
      table.string("password", 255).notNullable();
      table.boolean("isActivated").defaultTo(true);
      table.text("pictureUrl");
      table.string("roleId", 255).notNullable().defaultTo("3");
      table.timestamp("createdAt", { useTz: true }).defaultTo(knex.fn.now());
      table.foreign("roleId").references("id").inTable("role");
    })
    .createTableIfNotExists("car", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("name", 255).notNullable();
      table.decimal("price", 14, 2).notNullable();
      table.integer("year");
      table.string("size", 255).notNullable();
      table.boolean("availability").defaultTo(true);
      table.integer("capacity").notNullable();
      table.text("description");
      table.text("pictureUrl");
      table.timestamp("availableAt", { useTz: true }).defaultTo(knex.fn.now());
      table.timestamp("createdAt", { useTz: true }).defaultTo(knex.fn.now());
      table.string("createdById", 255);
      table.timestamp("updatedAt", { useTz: true }).defaultTo(knex.fn.now());
      table.string("updatedById", 255);
      table.boolean("isDeleted").defaultTo(false);
      table.timestamp("deletedAt", { useTz: true });
      table.string("deletedById", 255);
      table.string("carBrandId", 255);
      table.string("carTypeId", 255);
      table.string("carTransmissionId");
      table.foreign("carBrandId").references("id").inTable("car_brand");
      table.foreign("carTypeId").references("id").inTable("car_type");
      table.foreign("carTransmissionId").references("id").inTable("car_transmission");
      table.foreign("createdById").references("id").inTable("account");
      table.foreign("updatedById").references("id").inTable("account");
      table.foreign("deletedById").references("id").inTable("account");
    })
    .createTableIfNotExists("trx", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("accountId");
      table.timestamp("date", { useTz: true }).defaultTo(knex.fn.now());
      table.foreign("accountId").references("id").inTable("account")
    })
    .createTableIfNotExists("trx_detail", (table: Knex.TableBuilder) => {
      table.string("id", 255).notNullable().primary();
      table.string("trxId", 255);
      table.string("carId", 255);
      table.integer("longDay");
      table.decimal("totalPrice", 14, 2);
      table.foreign("trxId").references("id").inTable("trx");
      table.foreign("carId").references("id").inTable("car");
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists("trx_detail")
    .dropTableIfExists("trx")
    .dropTableIfExists("car_brand")
    .dropTableIfExists("car")
    .dropTableIfExists("account")
    .dropTableIfExists("car_type");
}
