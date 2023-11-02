import supertest from "supertest";
import express, { Application } from "express";
import { router } from "./";
const app: Application = express();

app.use(router);

describe("/users validation", () => {
  it("deve validar /users", async () => {
    const response = await supertest(app).get("/user/");
    expect(response.status).toBe(202);
  });
});
