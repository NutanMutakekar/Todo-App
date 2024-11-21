const mongoose=require('mongoose');



const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please give title"]
    },
    completed:{
        type:Boolean,
        required:[true,"please enter boolean values yes or no"]
    },
//    due_date:{
//     type:Date,
//     required:[true,"please enter the due date"]
//    },
   categoryId:{
    type:mongoose.Schema.ObjectId,
    required:[true,"provide a valid category id"]
   }
},
{
    timestamps:true
})

const Todo=mongoose.model('Todo',todoSchema);
module.exports=Todo