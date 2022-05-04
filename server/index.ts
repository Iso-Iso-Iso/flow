import express from "express";
import { connect } from "mongoose";

import lessonsRouter from "@routers/lessons";

connect("mongodb://localhost:27017/flow")
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use("/api", lessonsRouter);

app.listen(process.env.PORT || 4000);
