import express from "express";
import dotenv from "dotenv"
import errorRoute from './routes/errorRoute.js'
import pageRoute from "./routes/pageRoute.js"
import socialRoute from "./routes/socialRouter.js"
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
app.use('/social', socialRoute)
app.use('*', errorRoute)

app.listen(port, () => {
    console.log((`Application running on port: ${port}`))
})