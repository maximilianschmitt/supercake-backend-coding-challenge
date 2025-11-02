import expect from "expect";
import httpTest from "../testing/httpTest";
import request from "../testing/request";
import testData from "../testing/testData";
import expectNotFound from "../testing/expectNotFound";

describe("GET /users/:userId", () => {
  httpTest.setup();

  it("responds with 404 NotFoundError if user does not exist", async () => {
    await expectNotFound("User", request.get("/users/non-existent-user-id"));
  });

  it("responds with 200 { user }", async () => {
    const user = await testData.user();

    const response = await request.get(`/users/${user.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ user: { id: user.id, name: user.name } });
  });

  it('responds with authenticated user when userId is "@me"', async () => {
    const user = await testData.user();

    const response = await request
      .get("/users/@me")
      .set("Authorization", user.id);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ user: { id: user.id, name: user.name } });
  });

  it(
    "includes the user's tokensReceived and tokensPurchased balances in the response",
  );
});
