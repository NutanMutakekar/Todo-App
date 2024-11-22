const Todo = require("../model/Todo");

const asyncHandler = require("../middleware/asyncHandler");

const Category = require("../model/Category");

const AppError = require("../AppError/AppError");

exports.createTodo = asyncHandler(async (req, res, next) => {
  let result;
  result = await Category.findById(req.params.categoryId);
  if (!result) {
    return next(new AppError(400, "category id not found post todo req "));
  }
  req.body.categoryId = req.params.categoryId;
  result = await Todo.create(req.body);

  res.status(200).json({
    success: true,
    message: result,
  });
});

exports.getTodo = asyncHandler(async (req, res, next) => {
  let result;
  result = await Category.findById(req.params.categoryId);
  if (result) {
    result = await Todo.find({ categoryId: req.params.categoryId });
  } else {
    result = await Todo.find();
  }

  res.status(200).json({
    success: true,
    message: result,
  });
});

exports.getSingleTodo = asyncHandler(async (req, res, next) => {
  let result;
  result = await Todo.findById(req.params.id);
  if (!result) {
    return next(new AppError(400, "todo not found from get single req"));
  }
  res.status(200).json({
    success: true,
    message: result,
  });
});

exports.updateTodo = asyncHandler(async (req, res, next) => {
  let result;
  result = await Category.findById(req.params.categoryId);
  if (result) {
    result = await Todo.findById(req.params.id);
    if (!result) {
      next(new AppError(400, "todo not found from update cat"));
    }
    console.log(req.body);
    req.body.categoryId = req.params.categoryId;
    console.log(req.body);
    result = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: `todo with id ${req.params.id} is updated`,
      result,
    });
  } else {
    next(new AppError(404, "category id not exists"));
  }
});

exports.deleteTodo=asyncHandler(async(req,res,next)=>{
    let result
    result=await Todo.findById(req.params.id)
    if(!result){
        next(new AppError(404,"todo not found from delete req"))
    }
    result=await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        messsage:`todo with id ${req.params.id} is deleted successfully`,
        result
    })
})