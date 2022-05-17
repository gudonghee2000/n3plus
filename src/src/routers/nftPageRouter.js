import express from "express"
import { getNftPage, postNftPage, getWebCame } from "../controller/nftPageController";

const nftPageRouter = express.Router();

nftPageRouter.route("/webcame/:id").get(getWebCame);
nftPageRouter.route("").get(getNftPage).post(postNftPage);

export default nftPageRouter;