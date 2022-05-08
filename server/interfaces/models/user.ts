import { Document, PopulatedDoc } from "mongoose";
import { Role } from "./role";

export interface UserSchema extends Document, User {}

export interface User {
  name: string;
  password: string;
  mail: string;
  role?: PopulatedDoc<Role>;
}
