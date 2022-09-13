import express from "express"
import *as pageController from '../controller/pageController.js'

const router = express.Router()

router.route('/').get(pageController.getIndexPage)

//Maybe 404
router.route('*').get(pageController.get404Page)


export default router;