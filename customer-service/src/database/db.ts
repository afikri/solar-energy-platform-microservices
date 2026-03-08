import { Pool } from "pg";

export const pool = new Pool({
  host: "postgres",
  port: 5432,
  user: "solar",
  password: "solarpass",
  database: "solar_db",
});