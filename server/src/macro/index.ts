import express, { Router } from "express";
import { Middleware } from "../types/types";
import { data as contextAPI } from "./data";

const router: Router = express.Router();

router.get("/macro", (req, res): Middleware | void => {
  console.log(req.params);
  res.send(contextAPI[0]);
});
router.get("/macro/:product", (req, res): Middleware | void => {
  const product: Express.Request | any = req.params.product;
  console.log(req.params);
  res.send(contextAPI[product]);
});

export default router;
