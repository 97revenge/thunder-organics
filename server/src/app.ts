import express, { Application } from "express";

// import cors from "cors";

import router from "./macro";
import { Middleware } from "./types/types";

import { User as zod } from "./types/zod";

import { PrismaClient } from "@prisma/client";

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(router);

app.get("/", (req, res): Middleware | void => {
  console.log(req.params);

  res.send("ok");
});

app.listen(port, () => console.log("ok"));

// async function main() {
//   // [] - primeiro teste e validacao dele para a api
//   // [] - entidade post
//   // [] - entidade product
//   // [] - query validations
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.log(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
