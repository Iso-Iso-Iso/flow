import { UserSchema as User } from "@interfaces/models/user";

import { Schema, model, Types } from "mongoose";
import { uniqueField } from "@validators/index";

const userSchema = new Schema<User>({
  name: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  mail: { type: String, required: false, trim: true },
  role: { type: Types.ObjectId, ref: "role" },
});

userSchema.path("name").validate(
  async (value: string) =>
    await uniqueField("user", {
      name: value,
    }),

  "User with current title already exists"
);

const UserModel = model("user", userSchema);

export default UserModel;
