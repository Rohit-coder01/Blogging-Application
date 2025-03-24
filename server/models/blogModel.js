import mongoose from "mongoose";

const blogschema=mongoose.Schema({
  title:{
    type:String
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    refer:"categories",
  },
  description:{
    type:String,
  },
  thumbnail:{
    type:String
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    refer:"users"
  }
})
const blogmodel=mongoose.model("blogs",blogschema)

export default blogmodel;