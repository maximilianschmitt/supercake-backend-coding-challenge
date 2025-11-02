import { Response } from "supertest";
import expect from "expect";

async function expectNotFound(
  resource: string,
  responsePromise: Promise<Response>,
) {
  const response = await responsePromise;

  expect(response.status).toBe(404);
  expect(response.body).toEqual({
    error: "NotFoundError",
    resource,
    message: "User not found",
  });
}

export default expectNotFound;
