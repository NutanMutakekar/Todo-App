const express=require('express');
const {createCategory,
     getAllTodo,
     getSingleTodo,
     updateTodo,
     deleteTodo
}=require('../controller/Category')
const todoRoute=require('./todoRoute')

const router=express.Router();
router.use('/:categoryId/todos',todoRoute)
router.route('/')
             .post(createCategory)
             .get(getAllTodo)
router.route('/:id')
             .get(getSingleTodo)
             .put(updateTodo)
             .delete(deleteTodo)
module.exports=router;