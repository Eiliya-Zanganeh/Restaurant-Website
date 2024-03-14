const Joi = require("joi")

module.exports = async (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string().required(),
    });

    const status = schema.validate(req.body)

    if(status.error){
        res.status(401).send({message:"خطا در ورودی داده ها",detail:status.error.details[0].message}).end()
    } else {
        next()
    }

}