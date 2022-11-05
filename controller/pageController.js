import { Proj, Work } from '../models/mognooseModels.js'

const getIndexPage = async (req, res) => {
    const projData = await Proj.find()
    const workData = await Work.find()
    res.render("index", {
        projData,
        workData
    })
}

const get404Page = (req, res) => {
    res.status(404).render('404')
}
export {getIndexPage, get404Page}