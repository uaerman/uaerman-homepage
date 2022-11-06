import express from "express"
import *as pageController from '../controller/pageController.js'

const router = express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/patreon').get(pageController.getPatreonPage)
router.route('/discord').get(pageController.getdDiscordPage)
router.route('/twitter').get(pageController.getTwitterPage)
router.route('/github').get(pageController.getGithubPage)
router.route('/youtube').get(pageController.getYoutubePage)

//Maybe 404
router.route('*').get(pageController.get404Page)

export default router;