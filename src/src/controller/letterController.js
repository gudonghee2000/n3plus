import customModel from "../models/Custom";

export const getLetter = async (req, res) => {
    const datas = await customModel.find({}).sort({ "id": -1 });
    const name = datas[0].name;
    const url = "/" + datas[0].url;
    const message = String(datas[0].message);
    var messages = message.split("\n");
    var first = messages[0];
    var second = messages[1];
    var three = messages[2];
    var four = messages[3];
    var five = messages[4];
    var six = messages[5];
    var seven = messages[6];
    var eight = messages[7];
    return res.render("letter", { url, name, first, second, three, four, five, seven, eight});
}