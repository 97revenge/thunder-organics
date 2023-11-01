import express, { Application } from "express";

import cors from "cors";

import { router as products } from "./product";
import { router as users } from "./user";
import { Middleware } from "./types/types";

import env from "dotenv";

env.config();

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(products);
app.use(users);
app.use(cors);

app.get("/", (req, res): Middleware | void => {
  console.log(req.params);

  res.send("sd,fmsdklfgjm");
});

app.listen(port, () => console.log("ok"));

// async function main() {
//   // [] - primeiro teste e validacao dele para a api OK
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
