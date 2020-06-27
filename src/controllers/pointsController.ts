import knex from './../database/connection';
import {Request, Response} from 'express';

class pointsController {

  async index(request: Request, response: Response){
    const {uf, city, items} = request.query;

    const parsedItems = String(items)
    .split(',')
    .map(item => Number(item.trim()));

    const points = await knex('points')
                        .innerJoin('point_items','points.id','point_items.point_id')
                        .whereIn('point_items.item_id', parsedItems)
                        .where('points.uf',String(uf))
                        .where('points.city', String(city))
                        .distinct()
                        .select('points.*');
    if(!points){
      return response.status(400).json({message: 'Point not found'});
    }

    return response.json(points);
  }
  async create(request: Request, response: Response){
    const {
      name,
      email,
      whatsapp,
      longitude,
      latitude,
      uf,
      city,
      items
    } = request.body;

    const point = {
      image:
        "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      name,
      email,
      whatsapp,
      longitude,
      latitude,
      city,
      uf,
    };

        const trx = await knex.transaction();

        const insertedIds =  await trx('points').insert(point);
        const point_id = insertedIds[0];

        const point_items = items.map((item_id: number) => {
          return { item_id, point_id }
        });

        await trx('point_items').insert(point_items);

        trx.commit();

        response.json({id: point_id, ...point})

  }

  async show(request: Request, response: Response){
    const {id} = request.params;
    const point = await knex('points').select("*").where({id: id}).first();

    if(!point){
      return response.status(400).json({message: 'Poin not found.'});
    }

    const items = await knex('points')
                        .innerJoin('point_items','points.id','point_items.point_id')
                        .innerJoin('items','point_items.item_id','items.id')
                        .select('items.*').where('points.id', id);

    return response.json({...point, items});
  }
}

export default pointsController;