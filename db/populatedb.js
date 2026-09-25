import pg from "pg";
import { configDotenv } from "dotenv";
import fs from "fs";

configDotenv();

const localDBUrl = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT || 5432}/messageboard`

const { Client } = pg
const productionDBUrl = process.argv[2]

const client = new Client({
  connectionString: productionDBUrl || localDBUrl,
  ...(productionDBUrl && {
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync("./ca.pem").toString()
    }
  })
})

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  text VARCHAR(255),
  added TIMESTAMP
);

INSERT INTO messages (username, text, added)
VALUES
  ('Bryan', 'Good day folks', NOW()),
  ('Nina', 'Bye friends', NOW());
`;

await client.connect()
await client.query(SQL)
await client.end()