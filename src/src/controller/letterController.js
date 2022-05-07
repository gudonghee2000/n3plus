import customModel from "../models/Custom";

export const getLetter = async (req, res) => {
    const datas = await customModel.find({}).sort({ "id": -1 });
    const name = datas[0].name;
    const url = "/" + datas[0].url;
    const message = datas[0].message;
    return res.render("letter", { url, name, message });
}