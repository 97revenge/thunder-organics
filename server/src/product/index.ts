import { Product as zod } from "./../types/zod";
import { PrismaClient } from "@prisma/client";
import express, { Router, Request, Response, Handler } from "express";

const router: Router = express.Router();
const prisma: PrismaClient = new PrismaClient();

import { ZodError } from "zod";

router.use(express.json());

router.get("/products", async (req: Request, res: Response) => {
  try {
    const instance = await prisma.product.findMany();
    res.status(202).json({
      message: "buscado com suceso",
      products: instance,
      method: req.query.endpoint,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/products/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const instance = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    res
      .status(201)
      .send({ message: "encontrado com sucesso", content: instance });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(404).send({ message: err.issues });
    }
  }
});

router.post("/products", async (req: Request, res: Response) => {
  try {
    const { image, price, tag, name, description } = req.body;

    const instance: zod = await prisma.product.create({
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
    if (err instanceof ZodError) {
      res.status(404).send({ message: err.issues });
    }
  }
});

router
  .all("/upgrade-image/:id/:image", async (req: Request, res: Response) => {
    try {
      type Update = Pick<zod, "id" | "image">;

      const update: Update = {
        id: Number(req.params.id),
        image: req.params.image,
      };

      const instance = await prisma.product.update({
        where: {
          id: update.id,
        },
        data: {
          image: update.image,
        },
      });

      res.status(201).send({
        message: "editado com sucesso",
        content: instance,
      });
    } catch (err) {
      console.log(err);
    }
  })
  .all("/upgrade-price/:id/:price", async (req: Request, res: Response) => {
    try {
      type Update = Pick<zod, "id" | "price">;

      const update: Update = {
        id: Number(req.params.id),
        price: Number(req.params.price),
      };

      const instance = await prisma.product.update({
        where: {
          id: update.id,
        },
        data: {
          price: update.price,
        },
      });

      res.status(201).send({
        message: "editado com sucesso",
        content: instance,
      });
    } catch (err) {
      console.log(err);
    }
  })
  .all("/upgrade-tag/:id/:tag", async (req: Request, res: Response) => {
    try {
      type Update = Pick<zod, "id" | "tag">;

      const update: Update = {
        id: Number(req.params.id),
        tag: String(req.params.tag),
      };

      const instance = await prisma.product.update({
        where: {
          id: update.id,
        },
        data: {
          tag: update.tag,
        },
      });

      res.status(201).send({
        message: "editado com sucesso",
        content: instance,
      });
    } catch (err) {
      console.log(err);
    }
  })
  .all("/upgrade-name/:id/:name", async (req: Request, res: Response) => {
    try {
      type Update = Pick<zod, "id" | "name">;

      const update: Update = {
        id: Number(req.params.id),
        name: String(req.params.name),
      };

      const instance = await prisma.product.update({
        where: {
          id: update.id,
        },
        data: {
          name: update.name,
        },
      });

      res.status(201).send({
        message: "editado com sucesso",
        content: instance,
      });
    } catch (err) {
      console.log(err);
    }
  })
  .all(
    "/upgrade-description/:id/:description",
    async (req: Request, res: Response) => {
      try {
        type Update = Pick<zod, "id" | "description">;

        const update: Update = {
          id: Number(req.params.id),
          description: String(req.params.description),
        };

        const instance = await prisma.product.update({
          where: {
            id: update.id,
          },
          data: {
            name: update.description,
          },
        });

        res.status(201).send({
          message: "editado com sucesso",
          content: instance,
        });
      } catch (err) {
        console.log(err);
      }
    }
  );

export { router };
