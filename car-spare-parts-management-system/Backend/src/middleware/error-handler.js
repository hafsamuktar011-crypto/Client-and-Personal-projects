
export const errorHandler(err,req,res,next)=>{
    let customError={
        statusCode:err.statucode || StatusCode.INTERNAL_SERVER_ERROR
    }
}