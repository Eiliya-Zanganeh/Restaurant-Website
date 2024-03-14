const jwt = require("jsonwebtoken");
const mongo = require("../connect")

module.exports = async (req, res) => {
    const foods = await getAllFood()
    res.status(200).send(foods).end
}

async function getAllFood() {
    let result = []
    await mongo.db("foods")
        .collection("food")
        .find()
        .forEach((item) => {
            result.push(item)
        })
    return result
}