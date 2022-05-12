import express from "express"
import { getNftPage, postNftPage } from "../controller/nftPageController";

const nftPageRouter = express.Router();

nftPageRouter.route("").get(getNftPage).post(postNftPage);

export default nftPageRouter;