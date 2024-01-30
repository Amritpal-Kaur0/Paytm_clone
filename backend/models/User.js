const mongoose =require('mongoose');

const UserSchema= mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        maxLength: 30,
        trim:true
    },
    firstName:{
        type:String,
        required:true,
        maxLength:30,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        maxLength:30,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        trim:true
    }
    }
,{
    timestamps:true
})

const User=mongoose.model('User',UserSchema);

module.exports=User;