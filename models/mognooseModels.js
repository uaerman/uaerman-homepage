import mongoose from "mongoose";

const { Schema } = mongoose

const reqString = {
    type: String,
    require: true
}

const projectSchema = new Schema({
    name: reqString,
    desc: reqString,
    url: reqString 
})

const Proj = mongoose.model('Projects', projectSchema)

export { Proj }