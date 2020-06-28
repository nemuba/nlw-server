# NLW RocketSeat - SERVER

## Endpoints:
Items:

```json
 GET items: {
   "id": 1,
   "title": "Baterias",
   "image_url": "baterias.svg",
 }
```

Ponto de coleta:

```json
 GET points: {
   "name": "Mercado do Zé",
   "email": "ze@ze.com",
   "whatsapp": "(12) 99999-9999",
   "uf": "SP",
   "city": "Ubatuba",
   "longitude": -43.566565,
   "latitude": -43.566565,
   "items": [1,2,3,4,5,6]
 }
```

```json
 POST points: {
   "name": "Mercado do Zé",
   "email": "ze@ze.com",
   "whatsapp": "(12) 99999-9999",
   "uf": "SP",
   "city": "Ubatuba",
   "longitude": -43.566565,
   "latitude": -43.566565,
   "items": [1,2,3,4,5,6]
 }
```