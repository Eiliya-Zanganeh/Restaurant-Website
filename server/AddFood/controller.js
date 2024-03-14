const mongo = require("../connect")

module.exports = async (req, res) => {
    const {name, price, description} = req.body
        try{
            await mongo.db("foods")
                .collection("food")
                .insertOne({name: name, price: price, description: description})
        }catch {
            res.status(500).send({message:"خطای دیتابیس"}).end()
        }
        res.send({message:"غذا با موفقیت ثبت شد",detail:""}).end()
}

