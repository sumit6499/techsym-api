import express,{Express,Request,Response} from 'express'
import getSuccessMsg from './utils/reponses/successMsg'
const app:Express= express()

const PORT= process.env.PORT||3000


app.get("/",(req:Request,res:Response)=>{
    res.json(getSuccessMsg({
        success:true,
        msg:"Hello from server"
    }))
})

app.listen(PORT,()=>{
    console.log("server running on port 3000");
})