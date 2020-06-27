import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('items', (table: Knex.CreateTableBuilder) =>{
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
    table.timestamps(true,true);
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('items');
}
