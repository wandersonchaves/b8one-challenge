const express = require("express");
const DevController = require("./controllers/DevController");

const routes = express.Router();

routes.post("/devs", DevController.create);

routes.get("/devs", DevController.findAll);

routes.get("/devs/:devId", DevController.findOne);

routes.patch("/devs/:devId", DevController.updateOne);

routes.delete("/devs/:devId", DevController.destroy);

export default routes;
