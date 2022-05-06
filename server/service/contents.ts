import ContentsModel from "@models/contents";
import LessonsService from "@service/lessons";

import { Contents } from "@interfaces/models/contents";
import { Lessons } from "@interfaces/models/lessons";

class ContentsService {
  async getAll(onlyPublished: boolean) {
    const queryString = {
      isPublished: onlyPublished ? true : { $exists: true },
    };

    const contents = await ContentsModel.find(queryString).populate("items");
    console.log(contents);

    return contents;
  }

  async createOne(name: string) {
    const contents = new ContentsModel({ name });
    await contents.validate();
    return await contents.save();
  }

  async addLesson(contentsName: string, lessonName: string) {
    const lesson = await LessonsService.getOne(lessonName);

    if (!lesson)
      throw new Error(`lessons with name:${lessonName} does not exist`);

    await ContentsModel.updateOne(
      { name: contentsName },
      {
        $push: { items: lesson?._id },
      }
    );
  }

  async moveLessons(name: string, from: number, to: number) {
    const contents = await ContentsModel.findOne({ name });

    if (!contents) throw new Error(`contents with name:${name} does not exist`);

    const splicedElements = (contents!.items as Lessons[])!.splice(from, 1);

    (contents!.items as Lessons[])!.splice(to, 0, ...splicedElements);

    contents.save({ validateBeforeSave: false });
  }
}

export default new ContentsService();
