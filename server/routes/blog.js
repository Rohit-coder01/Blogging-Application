import express from 'express'
import AuthController from '../controllers/authController.js'
import blogController from '../controllers/blogsController.js';
import categoryController from '../controllers/categoryController.js';
import multer from 'multer'
import checkIsUserAuthenticated from '../middlewares/authMiddleware.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/public');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload= multer ({storage:storage});
 
const router = express.Router();


router.post("/user/register",AuthController.userRegistration)
router.post("/user/login",AuthController.userLogin)

router.get("/get/allblogs", checkIsUserAuthenticated,blogController.getAllBlogs)
router.post("/add/blog", upload.single("thumbnail") ,checkIsUserAuthenticated,blogController.addNewBlog)
router.get("/get/blog/:id",checkIsUserAuthenticated,blogController.getSingleBlog)

router.get("/get/categories",checkIsUserAuthenticated,categoryController.getAllCategories)
router.post("/add/category",checkIsUserAuthenticated,categoryController.addNewcategory)

export default router;