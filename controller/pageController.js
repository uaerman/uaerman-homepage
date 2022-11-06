import { Proj, Work } from '../models/mognooseModels.js'

const getIndexPage = async (req, res) => {
    const projData = await Proj.find()
    const workData = await Work.find()
    res.render("index", {
        projData,
        workData
    })
}
const getPatreonPage = (req, res) => {
    res.status(302).redirect(process.env.PATREON)
}
const getdDiscordPage = (req, res) => {
    res.status(302).redirect(process.env.DISCORD)
}
const getTwitterPage = (req, res) => {
    res.status(302).redirect(process.env.TWITTER)
}
const getGithubPage = (req, res) => {
    res.status(302).redirect(process.env.GITHUB)
}
const getYoutubePage = (req, res) => {
    res.status(302).redirect(process.env.YOUTUBE)
}
const get404Page = (req, res) => {
    res.status(404).render('404')
}
export {getIndexPage, get404Page, getPatreonPage, getdDiscordPage, getTwitterPage, getGithubPage, getYoutubePage}