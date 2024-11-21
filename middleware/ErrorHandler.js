const ErrorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    res.status(statusCode).json({
        success:false,
        message:err.message|| "internal server error"
    })
    next();
}
module.exports=ErrorHandler; 