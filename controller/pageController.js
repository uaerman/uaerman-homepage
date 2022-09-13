import { Proj } from '../models/mognooseModels.js'

const getIndexPage = async (req, res) => {
    const data = await Proj.find()
    res.render("index", {
        data
    })
}
const get404Page = (req, res) => {
    res.status(404).render('404')
}
export {getIndexPage, get404Page}