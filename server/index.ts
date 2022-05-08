import express from "express";
import { connect } from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import "dotenv/config";

import lessonsRouter from "@routers/lessons";
import contentsRouter from "@routers/contents";
import userRouter from "@routers/user";

connect(process.env.DB_STRING || "mongodb://localhost:27017/flow")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_KEY || "awdljkawdljkaedklj",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING || "mongodb://localhost:27017/flow",
    }),
  })
);

app.use("/api", lessonsRouter);
app.use("/api", contentsRouter);
app.use("/api", userRouter);

app.listen(process.env.PORT || 4000);
