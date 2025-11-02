import type { Server } from "http";
import waitForURLReachable from "./waitForUrlReachable";
import env from "../env";
import { startServer } from "..";
import db from "../lib/db";
import fs from "fs";

declare global {
  // eslint-disable-next-line no-var
  var server: Server;
}

const schema = fs.readFileSync("src/schema.sql", "utf-8");

const httpTest = {
  setup() {
    before(async () => {
      if (global.server) {
        return;
      }

      global.server = await startServer();

      await waitForURLReachable(`http://localhost:${env.PORT}`);
    });

    beforeEach(async () => {
      await db.query("BEGIN");
      await db.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
      await db.query(schema);
      await db.query("COMMIT");
    });
  },
};

export default httpTest;
