import express from "express";
import db from "../lib/db";
import { User } from "../types";
import NotFoundError from "../errors/NotFoundError";
import authenticate from "../lib/authenticate";

const routes = express();

routes.get(
  "/users/:userId",
  authenticate({ authenticationRequired: false }),
  async (req, res) => {
    const user =
      req.params.userId === "@me"
        ? req.user
        : await db
            .query<User>("SELECT * FROM users WHERE id = $1", [
              req.params.userId,
            ])
            .then((result) => result.rows[0])
            .catch((err) => {
              if (err.code === "22P02") {
                return null;
              }

              throw err;
            });

    if (!user) {
      throw new NotFoundError("User");
    }

    return res.status(200).json({ user });
  },
);

export default routes;
