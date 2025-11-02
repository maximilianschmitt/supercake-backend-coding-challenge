import httpTest from "../testing/httpTest";
import request from "../testing/request";
import expectAuthenticationFailed from "../testing/expectAuthenticationFailed";

describe("POST /users/:userId/tips", () => {
  httpTest.setup();

  it("responds with 401 AuthenticationFailedError if authorization header is missing", async () => {
    await expectAuthenticationFailed(request.post("/users/1/tips"));
  });

  it("responds with 404 NotFoundError if user does not exist");

  it("responds with 400 if the payload is invalid");

  it("responds with 200 { tip }");

  it(
    "records the tip to the database, increases the recipient's tokensReceived balance and decreases the authenticated user's tokensPurchased balance",
  );
});
