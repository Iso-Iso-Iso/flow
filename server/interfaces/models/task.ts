import { Document } from "mongoose";

export interface Task extends Document {
  isPublished?: boolean;
  name: string;
}
