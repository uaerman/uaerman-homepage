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
const workScheme = new Schema({
    company: reqString,
    position: reqString,
    startDate: reqString,
    endDate: {
        type: String
    }
})


const Proj = mongoose.model('Projects', projectSchema)
const Work = mongoose.model('Works', workScheme)


export { Proj, Work }