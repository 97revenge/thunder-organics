import supertest from "supertest";
import express, { Application } from "express";
import { router } from "./";
const app: Application = express();

app.use(router);

describe("/product validation", () => {
  it("deve validar /products", async () => {
    const response = await supertest(app).get("/products/");
    expect(response.status).toBe(202);
  });
});
