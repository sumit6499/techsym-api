import {Router} from 'express'
import dotenv from 'dotenv'
import {getEvents} from '../../controllers/event.controller'

dotenv.config()
const router=Router()

router.get('/all',getEvents)

export default router