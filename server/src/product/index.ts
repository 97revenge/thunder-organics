import { Middleware } from "./../types/types";
import { Prisma, PrismaClient } from "@prisma/client";
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

const app = express();
app.use(express.json());

import { z } from "zod";

const schema = z.object({
  id: z.number(),
  image: z.string(),
  price: z.number(),
  tag: z.string(),
  offer: z.boolean(),
  br: z.boolean(),
  name: z.string(),
  description: z.string(),
});

type Props = {
  getter: object;
  setter: object;
  posting: object;
};
function ProductWare(this: Props, id: any, value: string) {
  this.getter = function () {
    router.get("/product", async (req, res): Promise<Middleware | void> => {
      const instance = await prisma.user.findMany();
      res.status(201).json(instance);
    });
  };
  this.setter = function () {
    router.get("/product:id", async (req, res): Promise<Middleware | void> => {
      const id = req.params.id;
      const instance = await prisma.user.aggregate({
        where: {
          id: id,
        },
      });
      res.status(201).json(instance);
    });
  };
  this.posting = function () {
    router.get("/product", async (req, res): Promise<Middleware | void> => {
      const { id, image, price, tag, offer, br, name, description, free } =
        req.body;
      const instance = await prisma.user.create({
        data: {
          id,
          image,
          price,
          tag,
          offer,
          br,
          name,
          description,
          free,
        },
      });

      res.status(201).send({ instance });
    });
  };
}
