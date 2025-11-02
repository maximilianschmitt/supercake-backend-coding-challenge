import { Client } from "pg";
import env from "../env";

const db = new Client({ connectionString: env.DB_URL });

export default db;
