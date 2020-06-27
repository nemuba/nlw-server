import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('point_items', (table: Knex.CreateTableBuilder)=>{
    table.increments("id").primary();
    table.integer("point_id")
      .notNullable()
      .references("id")
      .inTable("points");
    table.integer("item_id")
      .notNullable()
      .references("id")
      .inTable("items");
    table.timestamps(true,true);
  });
}


export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('point_items');
}
