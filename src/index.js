import express from "express";

import boardRouter from "./route/boards.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/board", boardRouter);
app.listen(3000);





