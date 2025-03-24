import categorymodel from "../models/categorymodel.js"
class categoryController{
  static getAllCategories=async(req,res)=>{
    try {
      const getAllCategories=await categorymodel.find({})
      return res.status(200).json(getAllCategories)

    } catch (error) {
      return res.status(400).json({message:error.message})
    }
  }
  static addNewcategory=async(req,res)=>{
    const{title}=req.body;
    try {
      if(title && title.trim()){
        const newCategory=new categorymodel({
          title,
        })
        const saveCategory= await newCategory.save();
         if(saveCategory){ 
          return res.status(200).json({message:"category added successfully"})
         }
      }
      else{
        return res.status(400).json({message:"all fields are requird"})
      }
    } catch (error) {
      return res.status(400).json({message:error.message}) 
    }
  } 
}

export default categoryController