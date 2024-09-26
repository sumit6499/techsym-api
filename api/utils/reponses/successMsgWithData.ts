interface SuccessMsgWithData{
    success:boolean,
    msg:string,
    data:any
}


const getMessageWithData=({success,msg,data}:SuccessMsgWithData)=>{
    return {
        success:success,
        msg:msg,
        data:data
    }
}

export default getMessageWithData