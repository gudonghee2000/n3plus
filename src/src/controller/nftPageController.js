import customModel from "../models/Custom";

export const getNftPage = (req, res) => {
    return res.render("nftpage");
}

export const postNftPage = async (req, res) => {
    const datas = await customModel.find({}).sort({ "id": -1 });
    return res.json({ items: datas })
}

export const getWebCame = async (req, res) => {
    console.log(req.params);
    const userId = req.params.id;
    const data = await customModel.findOne({id:userId});
    return res.render("webcame", {url:"/" + data.url});
}