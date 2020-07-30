const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const todoSchema=new Schema(
    {
        data: { type: String ,
                required:true
        },
        isCompleted:{
            type: Boolean,
            required:true,
        }
    }
)
const ToDo=mongoose.model('Todo',todoSchema);
module.exports = ToDo;