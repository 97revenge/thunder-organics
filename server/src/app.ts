import express, { Application } from "express";

// import cors from "cors";

import router from "./macro";
import { Middleware } from "./types/types";

import { PrismaClient } from "@prisma/client";

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(router);

app.get("/", (req, res): Middleware | void => {
  console.log(req.params);

  res.send("ok");
});

const prisma = new PrismaClient();

app.get("/user", async (req, res): Promise<Middleware | void> => {
  const user = await prisma.user.findMany();
  res.send(user);
});

app.post("/user", async (req, res): Promise<Middleware | void> => {
  const { name, lastName, email, password } = req.body;

  // const hashedPassword = await bcrypt.hash(password, 10);

  // const user = await prisma.user.create({
  //   name,
  //   lastName,
  //   email,
  //   password:password,
  // });

  res.status(201).send({ message: "usuario criado com sucesso !!! " });
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
