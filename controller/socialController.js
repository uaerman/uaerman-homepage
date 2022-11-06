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
export {getPatreonPage, getdDiscordPage, getTwitterPage, getGithubPage, getYoutubePage}