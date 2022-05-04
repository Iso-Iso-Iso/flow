import { Request, Response } from "express";

import LessonsService from "@service/lessons";

class Lessons {
  async paginate(req: Request, res: Response) {
    const p = Number(req.query.p);
    const isWithBody = Boolean(req.query.withBody);

    // TODO? move to constants
    const perPage = 30;

    try {
      const { documents, documentsCount } = await LessonsService.paginate(
        p,
        perPage,
        isWithBody
      );

      res
        .set("Total-Document-Count", documentsCount + "")
        .set("Documents-Per-Page", perPage + "")
        .send(documents);
    } catch (err) {
      res.status(404).json(err);
    }
  }

  async createOne(req: Request, res: Response) {
    const lessonsConfig = req.body;

    try {
      const createdLessons = await LessonsService.createOne(lessonsConfig);
      res.json(createdLessons);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req: Request, res: Response) {
    const { name } = req.params;

    try {
      const lesson = await LessonsService.getOne(name);
      res.json(lesson);
    } catch (err) {
      res.status(404).json(err);
    }
  }

  async updateOne(req: Request, res: Response) {
    const { name } = req.params;
    const updatedLesson = req.body;

    try {
      await LessonsService.updateOne(name, updatedLesson);
      res.json({});
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteOne(req: Request, res: Response) {
    const { name } = req.params;

    try {
      await LessonsService.deleteOne(name);
      res.json({});
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new Lessons();
