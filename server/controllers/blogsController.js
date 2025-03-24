  import blogmodel from "../models/blogModel.js";

  class blogController {
    // Get all blogs for the logged-in user
    static getAllBlogs = async (req, res) => {
      try {
        const getAllblogs = await blogmodel.find({ user: req.user._id });
        return res.status(200).json(getAllblogs);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    };

    // Add a new blog (with file upload)
    static addNewBlog = async (req, res) => {
      const { title, category, description } = req.body;
      try {
        if (title && category && description) {
          const addBlog = new blogmodel({
            title: title,
            description: description,
            category: category,
            thumbnail:req.file.filename,
            user:req.user._id,
          });
          const savedBlog=await addBlog.save();
          if(savedBlog){
            return res.status(200).json({ message: "Blog Added Successfully" });
          }
        } else {
          return res.status(400).json({ message: "All fields are required" });
        }
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    };
    

    //Get a single blog by ID
    static getSingleBlog = async (req, res) => {
      const { id } = req.params;
      try {
        if (id) {
          const fetchBlogsByID = await blogmodel.findById(id);
          return res.status(200).json(fetchBlogsByID);
        }
        else{
          return res.status(400).json({ message: "Invalid URL" });
        }
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    };
  }

  export default blogController;
