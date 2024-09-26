interface ErrorMsg{
    success:boolean,
    error:any,
    msg:string,
}


const getErrorMsg=({success,error,msg}:ErrorMsg)=>{
    return {
        success:success,
        error:error,
        msg:msg,
    }
}

export default getErrorMsg