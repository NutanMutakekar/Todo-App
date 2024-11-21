const mongoose=require('mongoose');



const categorySchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please give title"]
    },
    description:{
        type:String,
        required:[true,"please enter description"]
    }
},
{
    timestamps:true
})

const Category=mongoose.model('Category',categorySchema);
module.exports=Category