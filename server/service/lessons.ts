import { Lessons } from "@interfaces/models/lessons";
import LessonsModel from "@models/lessons";
import { PaginateResult } from "@interfaces/query";

class LessonsService {
  async createOne(config: Lessons) {
    const lessons = new LessonsModel(config);
    await lessons.validate();
    const createdLessons = lessons.save();
    return createdLessons;
  }

  async paginate(
    p: number,
    perPage: number = 30,
    isWithBody: boolean = false
  ): Promise<PaginateResult<Lessons>> {
    const selectString = isWithBody ? "" : "-body";

    const lessons = await LessonsModel.find({}, selectString, {
      limit: perPage,
      skip: (p - 1) * 30,
    });

    const documentsCount = await LessonsModel.estimatedDocumentCount();

    if (!lessons.length) throw new Error("page is not exist");

    return { documents: lessons, documentsCount };
  }

  async getOne(name: string) {
    const lesson = await LessonsModel.findOne({ name });

    if (!lesson) throw new Error("Lesson didn't find");
    return lesson;
  }

  async updateOne(name: string, updatedLesson: Lessons) {
    // TODO? add checking lessons existing

    const lesson = new LessonsModel(updatedLesson);
    await lesson.validate();
    await LessonsModel.updateOne({ name }, updatedLesson);
  }

  async deleteOne(name: string) {
    // TODO? add checking lessons existing

    await LessonsModel.deleteOne({ name });
  }
}

export default new LessonsService();
