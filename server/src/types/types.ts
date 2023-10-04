import { Request, Response } from "express";

export type Middleware = {
  req: Request;
  res: Response;
};
