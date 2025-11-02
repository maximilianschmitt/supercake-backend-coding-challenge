import express from "express";
import db from "./db";
import { User } from "../types";
import AuthenticationFailedError from "../errors/AuthenticationFailedError";

export type AuthenticateOptions = {
  authenticationRequired?: boolean;
};

function authenticate({
  authenticationRequired = true,
}: AuthenticateOptions = {}) {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    if (typeof req.headers.authorization === "string") {
      const user = await db
        .query<User>("SELECT * FROM users WHERE id = $1", [
          req.headers.authorization,
        ])
        .then((result) => result.rows[0]);

      req.user = user;
    }

    if (authenticationRequired && !req.user) {
      throw new AuthenticationFailedError();
    }

    next();
  };
}

export default authenticate;
