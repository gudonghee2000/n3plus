import express from "express";
import customRouter from "./routers/CustomRouter";
import homeRouter from "./routers/homeRouter";
import questionRouter from "./routers/questionRouter";
import letterRouter from "./routers/letterRouter";
import loadingRouter from "./routers/loadingRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static('image'));
app.use("/static", express.static("assets"));
app.use("/uploads", express.static("uploads"));

app.use("/loading", loadingRouter);
app.use("/letter", letterRouter);
app.use("/", homeRouter);
app.use("/custom", customRouter);
app.use("/question", questionRouter);

export default app;
