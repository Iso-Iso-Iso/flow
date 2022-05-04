import { Lessons } from "@interfaces/models/lessons";
import { PopulatedDoc } from "mongoose";

export interface LessonsCollection {
  name: string;
  items: PopulatedDoc<Lessons[]>;
}
