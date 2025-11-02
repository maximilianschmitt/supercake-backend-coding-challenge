import HttpError from "./HttpError";

class AuthenticationFailedError extends HttpError {
  statusCode = 401;
  name = "AuthenticationFailedError";
  message = "Authentication failed. Please check your credentials.";
}

export default AuthenticationFailedError;
