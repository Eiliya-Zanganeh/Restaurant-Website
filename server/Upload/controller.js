
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');const mongo = require("../connect")
const multer = require("multer");



module.exports = async (req, res, next) => {
    const file = req.file;
    try{
        await mongo.db("foods")
            .collection("files")
            .insertOne({image: file})
    }catch {
        res.status(500).send({message:"خطای دیتابیس"}).end()
    }
    res.send({message:file.path,detail:""}).end()
}