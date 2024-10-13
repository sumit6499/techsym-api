import {Hono} from 'hono'
import {getEvents} from '../controllers/events.controller'
import {postEvents} from '../controllers/events.controller'



const router =new Hono()

router.get('/all',getEvents)
router.post('/create',postEvents)

export default router