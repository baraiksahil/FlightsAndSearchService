# Welcome to my flight service

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as your root directory of downloaded project
- Create a `.env` file in root directory and add the following environment variable
- `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
    "development": {
    "username": "<YOUR_USER_NAME>",
    "password": "<YOUR_PASSWORD>",
    "database": "<YOUR_DB_NAME>",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
}
```

- once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

and then execute

`npx sequelize db:migrate`

```

## DB Design

    - Airplane
    - Flight
    - City
    - Airport

    - A flight belongs to a airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights, but a flight belongs to one airport
```

## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address,city_id, created_at, updated_at

    Relationship -> City has many airport and airport belongs to the city (one to many)

```
npx sequelize model:generate --name Airport --attributes name:String, address:String, cityId:integer

```
