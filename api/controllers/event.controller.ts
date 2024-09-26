import {Request,Response} from 'express'
import successMsgWthData from '../utils/reponses/successMsgWithData'
import getErrorMsg from '../utils/reponses/errorMsg'


export const getEvents=async (req:Request,res:Response)=>{
    try {


        res.status(200).json(successMsgWthData({
            success:true,
            msg:"Data fetched successfully",
            data:[]
        }))
    } catch (error) {

        console.log(error)
        res.status(500).json(getErrorMsg({
            success:false,
            msg:"Something went wrong",
            error:error
        }))
    }
    
}