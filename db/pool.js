import { configDotenv } from "dotenv";
import pg from "pg";

configDotenv();

const { Pool } = pg;

export default new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: process.env.DB_CA
    ? {
        ca: process.env.DB_CA,
        rejectUnauthorized: true
      }
    : undefined
});