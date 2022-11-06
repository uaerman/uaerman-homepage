import express from "express";
import dotenv from "dotenv"
import pageRoute from "./routes/pageRoute.js"
import conn from "./db.js"

dotenv.config()

//Connection to the DB
conn()

const app = express();
const port = process.env.PORT

//Ejs template engine
app.set("view engine", "ejs");

//Static files middlefiles
app.use(express.static('public'));

//routes
app.use('/', pageRoute)

app.listen(port, () => {
    console.log((`Application running on port: ${port}`))
})