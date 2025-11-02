class HttpError extends Error {
  statusCode = 500;
  message = "Internal Server Error";

  toJSON() {
    return {
      error: this.name,
      message: this.message,
    };
  }
}

export default HttpError;
