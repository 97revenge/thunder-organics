import supertest from "supertest";
import express, { Application } from "express";
import { router } from "./";
const app: Application = express();

app.use(router);

describe("/posts validation", () => {
  it("deve validar /posts", async () => {
    const response = await supertest(app).get("/posts/");
    expect(response.status).toBe(202);
  });
});
