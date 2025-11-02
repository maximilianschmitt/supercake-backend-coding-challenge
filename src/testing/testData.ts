import { randomUUID } from "crypto";
import { User } from "../types";
import db from "../lib/db";

const testData = {
  async user(overrides: Partial<User> = {}) {
    const id = randomUUID();

    const user: User = {
      id,
      name: `User ${id}`,
      ...overrides,
    };

    await db.query("INSERT INTO users (id, name) VALUES ($1, $2)", [
      user.id,
      user.name,
    ]);

    return user;
  },
};

export default testData;
