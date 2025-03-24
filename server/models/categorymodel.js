import mongoose from "mongoose";

const categoryschema=new mongoose.Schema({
  title:{
    type:String,
  }
})
const categorymodel=mongoose.model("categories",categoryschema)
export default categorymodel  