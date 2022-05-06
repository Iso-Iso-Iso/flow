import { Request } from "express";
import PATCH_EVENTS from "./patch-events";
import ContentsService from "@service/contents";

async function validate(req: Request): Promise<object | void> {
  const { action } = req.query;

  switch (action) {
    case PATCH_EVENTS.ADD_LESSONS: {
      const { lessonName } = req.body;
      const { name: contentsName } = req.params;

      return await ContentsService.addLesson(contentsName, lessonName);
    }
    case PATCH_EVENTS.MOVE_LESSONS: {
      const { moveFrom, moveTo } = req.body;
      const { name } = req.params;

      return await ContentsService.moveLessons(name, moveFrom, moveTo);
    }
    default: {
      throw new Error("Action doesn's set");
    }
  }
}

export default validate;
