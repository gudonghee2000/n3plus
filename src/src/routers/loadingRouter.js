import express from "express"
import { getLoading } from "../controller/loadingController";

const loadingRouter = express.Router();

loadingRouter.route("").get(getLoading);

export default loadingRouter;