import express, { Router, Request, Response } from "express";

import { User as zod } from "../types/zod";
import { PrismaClient } from "@prisma/client";
import { ZodError } from "zod";

import bcrypt from "bcrypt";
const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

router.get("/user", async (_req: Request, res: Response, next) => {
  const instance = await prisma.user.findMany();

  res.status(202).send({ message: "procurado com suceso", content: instance });
  next();
});

router.get("/user/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const instance = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  res.send({ content: instance });
});

router.post("/user", async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password } = req.body;
    const instance: zod = await prisma.user.create({
      data: {
        name,
        lastName,
        email,
        password: String(bcrypt.hash(password, 10)),
      },
    });

    res.send({ message: "criado com sucesso", content: instance });
  } catch (err) {
    if (err instanceof ZodError) {
      console.log(err.issues);
    }
  }
});

router.all("/delete/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const instance = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    res.send({ message: "deletado com sucesso", content: instance });
  } catch (err) {
    console.log(err);
  }
});

router
  .all("/update-name/:id/:name", async (req: Request, res: Response) => {
    try {
      type Update = Pick<zod, "id" | "name">;

      const update: Update = {
        id: Number(req.params.id),
        name: req.params.name,
      };

      const instance = await prisma.user.update({
        where: {
          id: update.id,
        },
        data: {
          name: update.name,
        },
      });

      res.send({ message: "editado com sucesso !!!", content: instance });
    } catch (err) {
      if (err instanceof ZodError) {
        console.log(err.issues);
      }
    }
  })
  .all(
    "/update-lastName/:id/:lastName",
    async (req: Request, res: Response) => {
      try {
        type Update = Pick<zod, "id" | "lastName">;

        const update: Update = {
          id: Number(req.params.id),
          lastName: req.params.lastName,
        };

        const instance = await prisma.user.update({
          where: {
            id: update.id,
          },
          data: {
            name: update.lastName,
          },
        });

        res.send({ message: "editado com sucesso !!!", content: instance });
      } catch (err) {
        if (err instanceof ZodError) {
          console.log(err.issues);
        }
      }
    }
  );

export { router };
