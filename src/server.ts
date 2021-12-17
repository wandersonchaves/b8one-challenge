import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

const server = express();

server.use(express.json());
server.use(routes);

mongoose.connect(
  "mongodb+srv://root:toor@cluster0.cz3zj.mongodb.net/b8one?retryWrites=true&w=majority"
);

server.listen(3333);
