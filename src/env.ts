import checkEnv from "./lib/checkEnv";

const env = checkEnv(["PORT", "NODE_ENV", "DB_URL"]);

export default env;
