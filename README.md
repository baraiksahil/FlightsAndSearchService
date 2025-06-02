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
