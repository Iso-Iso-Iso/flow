import { model, Schema, Types } from "mongoose";
import { LessonsCollection } from "@interfaces/models/lessons-collection";
import { uniqueField } from "@validators/index";

const lessonsCollectionSchema = new Schema<LessonsCollection>({
  name: { type: String, required: true },
  items: [{ type: Types.ObjectId, ref: "" }],
});

lessonsCollectionSchema.path("name").validate(
  async (value: string) =>
    await uniqueField("lessons-collection", {
      name: value,
    }),

  "Lessons collection with current title already exists"
);

const LessonsCollectionModel = model(
  "lessons-collection",
  lessonsCollectionSchema
);

export default LessonsCollectionModel;
