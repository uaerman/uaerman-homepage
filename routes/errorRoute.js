import express from "express"
import *as errorController from '../controller/errorController.js'

const router = express.Router()

router.route('*').get(errorController.get404Page)


export default router;