import db from "../lib/db";

export const mochaHooks = {
  afterAll: async () => {
    await new Promise<void>((resolve) => {
      if (!global.server || !global.server.listening) {
        return resolve();
      }

      global.server.on("close", resolve);
      global.server.on("exit", resolve);
      global.server.close();
    });

    await db.end();
  },
};
