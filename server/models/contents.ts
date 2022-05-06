import { model, Schema, Types } from "mongoose";
import { Contents } from "@interfaces/models/contents";
import { uniqueField } from "@validators/index";

const contentsSchema = new Schema<Contents>({
  name: { type: String, required: true },
  isPublished: { type: Boolean, default: false },
  items: [{ type: Types.ObjectId, ref: "lessons" }],
});

contentsSchema.path("name").validate(
  async (value: string) =>
    await uniqueField("contents", {
      name: value,
    }),

  "contents with current title already exists"
);

const ContentsModel = model("contents", contentsSchema);

export default ContentsModel;
