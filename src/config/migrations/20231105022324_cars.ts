import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("car", (table: Knex.TableBuilder) => {
        table.string("id", 255).notNullable().unique().primary();
        table.string("name", 255).notNullable();
        table.decimal("price", 14, 2).notNullable();
        table.string("size", 255).notNullable();
        table.text("picture").notNullable();
        table.dateTime("updated").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("car");
}

