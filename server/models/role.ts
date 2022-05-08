import { Role } from "@interfaces/models/role";

import { Schema, model } from "mongoose";

const roleSchema = new Schema<Role>({
  name: { type: String, required: true, trim: true },
  status: { type: Number, required: true, trim: true },
});

const RoleModel = model("role", roleSchema);
export default RoleModel;
