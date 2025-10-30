//Aqui va estar el codigo de la base de datos
// import pg from "pg";
// import {
//   PG_USER,
//   PG_HOST,
//   PG_DATABASE,
//   PG_PASSWORD,
//   PG_PORT,
// } from "./config.js";

// export const pool = new pg.Pool({
//   user: PG_USER,
//   host: PG_HOST,
//   database: PG_DATABASE,
//   password: PG_PASSWORD,
//   port: PG_PORT,
// });

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

pool.on("connect", () => {
  console.log("Conectado a la base de datos");
});
