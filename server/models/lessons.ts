import { model, Schema, models } from "mongoose";
import { uniqueField } from "@validators/index";

import { Lessons } from "@interfaces/models/lessons";

const lessonsSchema = new Schema<Lessons>({
  name: { type: String, required: true },
  body: { type: String, default: "" },
  isPublished: { type: Boolean, default: false },
});

// TODO! refactor this

lessonsSchema.path("name").validate(
  async (value: string) =>
    await uniqueField("lessons", {
      name: value,
    }),

  "Lessons with current title already exists"
);

const LessonsModel = model("lessons", lessonsSchema);

export default LessonsModel;
