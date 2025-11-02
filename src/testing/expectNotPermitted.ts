import { Response } from "supertest";
import expect from "expect";

async function expectNotPermitted(responsePromise: Promise<Response>) {
  const response = await responsePromise;

  expect(response.status).toBe(403);
  expect(response.body).toEqual({
    error: "NotPermittedError",
    message: "You do not have permission to perform this action",
  });
}

export default expectNotPermitted;
