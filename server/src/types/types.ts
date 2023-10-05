import { Request, Response } from "express";

export type Middleware = {
  req: Request;
  res: Response;
};

export type Product = {
  id?: number | undefined;
  image: string;
  name: string;
  value: number;
  description: string;
  discount: any;
};
