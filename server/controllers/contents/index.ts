import { Request, Response } from "express";
import ContentsService from "@service/contents";
import patchValidator from "./patch-validator";

class ContentsController {
  async getAll(req: Request, res: Response) {
    const { onlyPublished = true } = req.query;

    try {
      const contents = await ContentsService.getAll(Boolean(onlyPublished));
      res.json(contents);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async createOne(req: Request, res: Response) {
    const { name } = req.body;

    try {
      const contents = await ContentsService.createOne(name);
      res.send(contents);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async patchOne(req: Request, res: Response) {
    try {
      const response = await patchValidator(req);
      res.json(response || {});
    } catch (err) {
      console.log(err);

      res.status(500).json(err);
    }
  }
}
export default new ContentsController();
