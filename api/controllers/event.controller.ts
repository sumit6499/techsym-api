import {Request,Response} from 'express'
import {Events,Student} from '../services'
import {EventsType,StudentsType} from '../types/services'
import {errorMsg,successMsg,successMsgWithData} from '../utils/reponses'

export const getEvents=async (req:Request,res:Response)=>{
    try {
        const eventObj=new Events()

        const events=await eventObj.getEventsFromDb()


        res.status(200).json(successMsgWithData({
            success:true,
            msg:"Data fetched successfully",
            data:events
        }))


    } catch (error) {

        console.log(error)
        res.status(500).json(errorMsg({
            success:false,
            msg:"Internal server error",
            error:error
        }))
    }
    
}

export const postEvents=async (req:Request,res:Response)=>{
    try {
        const {name,description,learn_more,fees}:EventsType=req.body
        const event=new Events(name,description,fees,learn_more)

        if(!event.getName()){
            res.status(401).json(errorMsg({
                success:false,
                msg:"data not found",
                error:'undefined'
            }))
        }

        const dataRes=await event.setEventToDb()
    
        res.status(200).json(({
            success:true,
            msg:"Data posted successfully"
        }))

    } catch (error) {

        console.log(error)
        res.status(500).json(errorMsg({
            success:false,
            msg:"Internal server error",
            error:error
        }))
    }
}

export const notFound=async (res:Response)=>{
    try {
        res.status(404).json({
            success:true,
            msg:"Route not found"
        })
    } catch (error) {
        console.log(error)
    }
}