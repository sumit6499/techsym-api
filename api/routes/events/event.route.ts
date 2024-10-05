import {Router} from 'express'
import dotenv from 'dotenv'
import {getEvents,postEvents,notFound} from '../../controllers/event.controller'

dotenv.config()
const router=Router()

router.get('/all',getEvents)
router.post('/create',postEvents)
router.all('/*',notFound)

export default router