import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./routes";

const app = express();

app.use(json());

app.use(router);

app.listen(4000, async () => {
  await db.sync();
  console.log(`Hello World! ${process.env.PROJECT_NAME}`);
});
