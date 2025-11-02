import HttpError from "./HttpError";

class NotPermittedError extends HttpError {
  statusCode = 403;
  name = "NotPermittedError";
  message = "You do not have permission to perform this action";
}

export default NotPermittedError;
