import httpTest from "../testing/httpTest";

describe("POST /users/@me/payouts", () => {
  httpTest.setup();

  it(
    "responds with 401 AuthenticationFailedError if authorization header is missing",
  );

  it("responds with 200 { payout }");

  it(
    "records the payout to the database and decreases the user's tokensReceived balance",
  );

  it(
    "responds with 409 InsufficientFundsError if user has insufficient tokensReceived balance",
  );

  it(
    "can safely handle concurrent payout requests without allowing the user to overdraw their tokensReceived balance",
  );
});
