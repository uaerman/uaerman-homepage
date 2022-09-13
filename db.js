import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: "uaermanWeb",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to the DB succesfully!")
    }).catch((err) => {
        console.log(`DB Connect Error: ${err}`)
    })
}

export default conn;