import { Request, Response } from "express";
import DevModel from "../models/DevModel";

module.exports = {
  async findAll(req: Request, res: Response) {
    const devs = await DevModel.find();

    return devs.length > 0
      ? res.status(200).json(devs)
      : res.status(404).send({ error: "Dev is not found!" });
  },

  async findOne(req: Request, res: Response) {
    const { devId } = req.params;
    const dev = await DevModel.findById(devId);

    return dev
      ? res.status(200).json(dev)
      : res.status(404).send({ error: "Dev is not found!" });
  },

  async create(req: Request, res: Response) {
    const { name, user, bio } = req.body;
    const dev = new DevModel({ name, user, bio });
    await dev.save();

    return res.status(201).json(dev);
  },

  async updateOne(req: Request, res: Response) {
    const { devId } = req.params;

    try {
      const dev = await DevModel.findById(devId);
      Object.assign(dev, req.body);
      dev.save();
      res.send({ data: dev });
    } catch {
      return res.status(404).send({ error: "Dev is not found!" });
    }
  },

  async destroy(req: Request, res: Response) {
    const { devId } = req.params;
    try {
      const dev = await DevModel.findById(devId);
      await dev.remove();
      res.send({ ok: true });
    } catch {
      return res.status(404).send({ error: "Dev is not found!" });
    }
  },
};
