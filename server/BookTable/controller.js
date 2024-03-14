const mongo = require("../connect")

module.exports = async (req, res) => {
    const {name, phone, email, person, date} = req.body
        try{
            await mongo.db("foods")
                .collection("book-table")
                .insertOne({name: name, phone: phone, email: email, person:person, date: date})
        }catch {
            res.status(500).send({message:"خطای دیتابیس"}).end()
        }
        res.send({message:"رزرو با موفقیت ثبت شد",detail:""}).end()
}

