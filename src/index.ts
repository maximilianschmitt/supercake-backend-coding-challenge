import express from "express";
import env from "./env";
import bodyParser from "body-parser";
import routes from "./routes";
import errorHandler from "./errors/errorHandler";
import { Server } from "http";
import morgan from "morgan";
import db from "./lib/db";

const PORT = env.PORT;

export async function startServer() {
  const app = express();

  app.use(morgan("dev"));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(routes());

  app.use(errorHandler());

  await db.connect();

  return new Promise<Server>((resolve) => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);

      resolve(server);
    });
  });
}

if (require.main === module) {
  startServer().then((r) => r);
}
