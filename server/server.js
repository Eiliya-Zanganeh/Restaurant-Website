const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

// config -----------------------------------------------------------------------------

const app = express()
const connect = require('./connect')
dotenv.config()
connect.connect()
    .then(()=>{
        console.log("db connected")
    })
    .catch(() => {
        console.log("db disconnected")
    })

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
}));

// imports -----------------------------------------------------------------------------

const HomeUrl = require("./Home/controller")
// const AddFoodController = require("./AddFood/controller")
// const AddFoodMiddleware = require("./AddFood/middleware")
const BookTableController = require("./BookTable/controller")
const BookTableMiddleware = require("./BookTable/middleware")
// const uploadController = require("./upload/controller")

// urls -----------------------------------------------------------------------------

app.get('/home', HomeUrl)
app.get('/uploads/:name', function(req, res) {
    const filePath = path.resolve('uploads/' + req.params.name) ;
    res.sendFile(filePath);
});
// app.post('/home', AddFoodMiddleware,  AddFoodController)
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// });
// const upload = multer({ storage: storage });
// app.post('/upload', upload.single('file'), uploadController)



app.post('/booktable', BookTableMiddleware,  BookTableController)

app.listen(8000, function () {
    console.log("run")
})