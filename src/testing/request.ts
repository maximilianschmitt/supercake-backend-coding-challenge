import supertest from "supertest";
import env from "../env";

const request = supertest(`http://localhost:${env.PORT}`);

export default request;
