const Category = require("../model/Category");
const asyncHandler = require("../middleware/asyncHandler");
const AppError = require('../AppError/AppError');
const Todo=require('../model/Todo')
exports.createCategory = asyncHandler(async (req, res,next) => {
  let result;

  result = await Category.create(req.body);
  res.status(201).json({
    sucess: true,
    message: result,
  });
});

exports.getAllTodo = asyncHandler(async (req, res,next) => {
  let result = await Category.find();
  res.status(200).json({
    success: true,
    message: result,
  });
});

exports.getSingleTodo = asyncHandler(async (req, res,next) => {
  let result;
  result = await Category.findById(req.params.id);
  if (!result) {
   return next(new AppError(404, "todoNot found from get id req"));
  }
  res.status(200).json({
    success: true,
    message: result,
  });
});

exports.updateTodo=asyncHandler(async(req,res,next)=>{
    let result;
    result=await Category.findById(req.params.id);
    if(!result){
    return next(new AppError(400,"todo not found from update id req"));
    }
    result=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
   res.status(200).json({
    success:true,
    message1:` category with id ${req.params.id}  is successfullly updated`,
    result
   })
})
exports.deleteTodo=asyncHandler(
    async(req,res,next)=>{
        let result;
        result=await Category.findById(req.params.id)
        if(!result){
            return next(new AppError(400,"todo not found from delete"))
        }
        result=await Todo.deleteMany({categoryId:req.params.id})

        result=await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:` category with id ${req.params.id} is successfullly deleted`,
            result
        })
    }
)


