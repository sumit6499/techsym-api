import {ZodError} from 'zod'
import {ApiEvent as Events} from '../lib/main.class'
import {Context} from 'hono'
import { errorMsg, successMsg } from '../utils/responses'
import {EventType} from '../types'
import {EventSchema,EventsSchemaType} from '../validator/event.schema'

export const getEvents=async (c:Context)=>{
    try {
        const eventObj=new Events()
        const events =await eventObj.getEventsFromDb()

        return c.json(successMsg({
            success:true,
            msg:"Events fetched successfully"
        }),200)

    } catch (error) {
        console.log(error)
        return c.json(errorMsg({
            success:false,
            msg:"Internal server error",
            error:error
        }),500)
    }
}

export const postEvents=async (c:Context)=>{

    try {
        const body=await c.req.json()
        const eventData=EventSchema.parse(body)

        const {name,description,venue,fees}:EventsSchemaType=eventData
        const event=new Events(name,description,venue,fees)
        const dataRes=await event.setEventToDb()

        
        return c.json(successMsg({
                success:true,
                msg:"Event created successfully"
            }),201)
        
    } catch (error) {
        if(error instanceof ZodError){
            const formattedError=error.format()
            return c.json(errorMsg({
                success:false,
                error:formattedError,
                msg:error.name
            }),400)
        }

        return c.json(errorMsg({
            success:false,
            msg:"Internal server lock",
            error:error
        }),500)
    }

}