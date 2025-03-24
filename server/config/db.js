import mongoose from 'mongoose';

const connecttomongo=async ()=>{
const res= await mongoose.connect('mongodb://127.0.0.1:27017/blog-application');

  if(res){
    console.log("connected");
  }
};

export default connecttomongo;

 