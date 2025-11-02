import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import HttpError from "./HttpError";

function errorHandler(): ErrorRequestHandler {
  return (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json(err.toJSON());
      return;
    }

    console.error(err);
    res.status(500).json(new HttpError().toJSON());
  };
}

export default errorHandler;
