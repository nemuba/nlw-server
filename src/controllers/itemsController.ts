import Knex from "./../database/connection";
import { Request, Response } from "express";

class itemsController {
  async index(request: Request, response: Response) {
    const items = await Knex("items").select("*");

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        image: `http://localhost:3333/uploads/${item.image}`,
        title: item.title,
        created_at: item.created_at,
        updated_at: item.updated_at
      };
    });

    response.json(serializedItems);
  }
}

export default itemsController;
