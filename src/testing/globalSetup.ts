import env from "../env";

if (env.DB_URL.includes("production")) {
  throw new Error("httpTest.setup: Can't run against production database!");
}

if (!env.DB_URL.includes("test")) {
  throw new Error("httpTest.setup: Your DB_URL must include the word 'test'");
}
