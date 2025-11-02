import HttpError from "./HttpError";

class NotFoundError extends HttpError {
  statusCode = 404;
  name = "NotFoundError";
  message = "The requested resource was not found";

  constructor(public resource: string) {
    super();
    this.message = `${resource} not found`;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      resource: this.resource,
    };
  }
}

export default NotFoundError;
