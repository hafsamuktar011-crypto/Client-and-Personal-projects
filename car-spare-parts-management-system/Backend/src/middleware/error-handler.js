
export const errorHandler(err,req,res,next)=>{

    let customError={
        statusCode:err.statucode || StatusCode.INTERNAL_SERVER_ERROR,
        message:err.message || "something went wrong,please try again later",
    };
    return 
    res.status(customError.statusCode).json({
        success:false,
        message:customError.message
    })
}