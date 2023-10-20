import { Middleware } from "./../types/types";
import { Prisma, PrismaClient } from "@prisma/client";
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

type Props = {
  getter: object;
  setter: object;
};
function ProductWare(this: Props, id: any, value: string) {
  this.getter = function () {
    router.get("/product", async (req: Request, res: Response) => {
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
}
