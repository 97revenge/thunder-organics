import express, { Application } from "express";

// import cors from "cors";

import router from "./macro";
import { Middleware } from "./types/types";

const app: Application = express();
const port = process.env.PORT || 4000;

app.use(router);

app.get("/", (req, res): Middleware | void => {
  console.log(req.params);

  res.send("ok");
});

app.listen(port, () => console.log("ok"));