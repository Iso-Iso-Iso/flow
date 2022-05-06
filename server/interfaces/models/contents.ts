import { Lessons } from "@interfaces/models/lessons";
import { PopulatedDoc } from "mongoose";
import { Task } from "./task";

export interface Contents extends Task {
  items?: PopulatedDoc<Lessons[]>;
}
