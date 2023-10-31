import { User as zod } from "./../types/zod";
import { Middleware } from "./../types/types";
import { Prisma, PrismaClient } from "@prisma/client";
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

router.use(express.json());

router.get("/products", async (_req: Request, res: Response) => {
  try {
    const instance = await prisma.product.findMany();

    res.status(202).send({ instance });
  } catch (err) {
    console.log(err);
  }
});

router.post("/products", async (req: Request, res: Response) => {
  try {
    const { image, price, tag, name, description } = req.body;

    const instance = await prisma.product.create({
      data: {
        image,
        price,
        tag,
        name,
        description,
      },
    });

    res.status(201).json(instance);
  } catch (err) {
    console.log(err);
  }
});

export default router;

// router.post("/products", async (req: Request, res: Response) => {
//   const { image, price, tag, name, description } = req.body;
//   const instance: zod = await prisma.product.create({
//     image,
//     price,
//     tag,
//     name,
//     description,
//   });

//   res.status(201).json({ message: "criado com sucesso", content: instance });
// });

// function ProductWare(this: Props, id: any, value: string) {
//   this.getter = function () {
//     router.get("/product", async (req, res): Promise<Middleware | void> => {
//       const instance = await prisma.user.findMany();
//       res.status(201).json(instance);
//     });
//   };
//   this.setter = function () {
//     router.get("/product:id", async (req, res): Promise<Middleware | void> => {
//       const id = req.params.id;
//       const instance = await prisma.user.aggregate({
//         where: {
//           id: id,
//         },
//       });
//       res.status(201).json(instance);
//     });
//   };
//   this.posting = function () {
//     router.get("/product", async (req, res): Promise<Middleware | void> => {
//       const { id, image, price, tag, offer, br, name, description } =
//         schema.parse(req.body);
//       const instance : User = await prisma.user.create({
//         data: {
//           id,
//           image,
//           price,
//           tag,
//           offer,
//           br,
//           name,
//           description,
//         },
//       });

//       res.status(201).send({ instance });
//     });
//   };
// }
