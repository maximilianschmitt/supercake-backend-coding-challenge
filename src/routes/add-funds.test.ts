import httpTest from "../testing/httpTest";

describe("POST /users/@me/funds", () => {
  httpTest.setup();

  it(
    "responds with 401 AuthenticationFailedError if authorization header is missing",
  );

  it("responds with 200 { user }, including the user's updated balance");

  it(
    "records the purchase to the database and updates the user's tokensPurchased balance",
  );
});
