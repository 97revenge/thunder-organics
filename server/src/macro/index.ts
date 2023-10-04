import express, { Request, Response, Router } from "express";
import { Middleware } from "../types/types";

const router: Router = express.Router();

router.get("/macro", (req, res): Middleware | void => {
  res.send("open");
});

export default router;
