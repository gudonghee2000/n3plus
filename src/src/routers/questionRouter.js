import express from "express"
import { getQuestion, postQuestion, postQuestionSave, postMiddleQuestion } from "../controller/questionController";

const questionRouter = express.Router();

questionRouter.route("/middleQuestion").post(postMiddleQuestion);
questionRouter.route("/save").post(postQuestionSave);
questionRouter.route("").get(getQuestion).post(postQuestion);

export default questionRouter;