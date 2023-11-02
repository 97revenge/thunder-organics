import { PrismaClient } from "@prisma/client";
import express, { Router, Request, Response } from "express";

import { Post as zod } from "../types/zod";
import { ZodError } from "zod";
const prisma: PrismaClient = new PrismaClient();

const router: Router = express.Router();

router.get("/posts", async (_req: Request, res: Response) => {
  const instance = await prisma.post.findMany();

  res.send({ message: "encontrado com sucesso ", content: instance });

  // -- sem uml
  // - [x] dbdiagram
  // - [x] entidade prisma
  // - [x] implementation
  // res.send({content: })
});

router.get("posts/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const instance = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  res.send({ message: "ëncontrado com sucesso", content: instance });
});

router.post("/posts", async (req: Request, res: Response) => {
  try {
    const { title, author, content } = req.body;
    const instance: zod = await prisma.post.create({
      data: {
        title,
        author,
        content,
      },
    });
    res.send({ message: "post criado com sucesso", content: { instance } });
  } catch (err) {
    if (err instanceof ZodError) {
      err.addIssue;
      console.log(err.issues);
    }
  }
});

export { router };
