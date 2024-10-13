import { Hono } from 'hono'
import {errorMsg,successMsg,successMsgWithData} from './utils/responses'
import {cors} from 'hono/cors'
import eventRouter from './routes/events.route'
import {logger} from 'hono/logger'

const app = new Hono()

//middlewares
app.use('/api/*',cors({
  origin:'*',
  allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
  allowMethods: ['POST', 'GET', 'DELETE','PUT'],
  exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
  maxAge: 600,
  credentials: true,
}))


app.use(logger())

//routes
app.route('/api/events',eventRouter)

app.get('/', (c) => {
  return c.json(successMsg({
    success:true,
    msg:"Hello form server"
  }),200)
})



app.notFound((c)=>{
  return c.html("<h1>Route not found Please check route endpoint</h1>",404)
})

export default {
  port:process.env.PORT || 3000,
  fetch:app.fetch,
  maxRequestBodySize:1024*1024*200,
}
