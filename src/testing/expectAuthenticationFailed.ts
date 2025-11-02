import { Response } from "supertest";
import expect from "expect";

async function expectAuthenticationFailed(
  responsePromise: Response | Promise<Response>,
) {
  const response = await responsePromise;

  expect(response.status).toBe(401);
  expect(response.body).toEqual({
    error: "AuthenticationFailedError",
    message: "Authentication failed. Please check your credentials.",
  });
}

export default expectAuthenticationFailed;
