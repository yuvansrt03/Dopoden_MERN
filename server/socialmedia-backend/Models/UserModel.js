import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    mail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userImagepath:{
        type:String,
        default:''
    },
    dob:{
        type:Date,
        required:true
    }
},{
    timestamps:true
},{
    collection:'user-data'
})
  
const User = mongoose.model("userData", userSchema)
export default User