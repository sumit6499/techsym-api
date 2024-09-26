import express,{Express,Request,Response} from 'express'
import cors from 'cors'
import getSuccessMsg from './utils/reponses/successMsg'
import eventRoutes from './routes/events/event.route'

export const app:Express= express()
const PORT= process.env.PORT||3000

//middlewares
app.use(cors())
app.use("/api/v1/events",eventRoutes)


//default route
app.get("/",(req:Request,res:Response)=>{
    res.json(getSuccessMsg({
        success:true,
        msg:"Hello from server"
    }))
})

app.listen(PORT,()=>{
    console.log("server running on port 3000");
})