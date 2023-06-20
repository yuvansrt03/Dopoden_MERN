import mongoose from 'mongoose'
const postSchema = new mongoose.Schema({
    postOwnerId:{
        type:String,
        required:true,
    },
    postOwnername:{
        type:String,
        required:true,
    },
    postDescription:{
        type:String,
        required:true
    },
    postImagePath:{
        type:String,
        default:''
    },
    likes:{
        type:Map,
        of:Boolean,
        default:{}
    },
    userImagePath:{
        type:String,
        default:""
    },
    comments:{
        type:Array,
        default:[]
    }
},{
    timestamps:true
},{
    collection:'user-data'
})
  
const Post = mongoose.model("postData", postSchema)
export default Post