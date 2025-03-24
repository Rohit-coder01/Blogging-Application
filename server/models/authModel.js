import express from 'express'
import mongoose from "mongoose";

const authschema=new mongoose.Schema({
  username:{
    type:String,
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
})
const authmodel=mongoose.model("users",authschema)
export default authmodel;