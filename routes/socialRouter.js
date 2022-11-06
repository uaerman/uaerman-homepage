import express from "express"
import *as socialController from '../controller/socialController.js'

const router = express.Router()

router.route('/patreon').get(socialController.getPatreonPage)
router.route('/discord').get(socialController.getdDiscordPage)
router.route('/twitter').get(socialController.getTwitterPage)
router.route('/github').get(socialController.getGithubPage)
router.route('/youtube').get(socialController.getYoutubePage)


export default router;