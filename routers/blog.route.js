import { Router } from "express";
import blogController from "../controllers/blog.controller.js";
import imageUpload from "../middlewares/imageUpload.js";

const router = Router();

// ADD BLOG
router.post('/add-blog', imageUpload.single("image"), blogController.addBlog);
router.post('/update-blog/:id', imageUpload.single("image"), blogController.updateBlog);


// OTHER ROUTES
router.get('/get-all-myblogs', blogController.getAllMyBlogs);
router.get('/get-all-blogs', blogController.getAllBlogs);

router.get('/delete-blog/:id', blogController.deleteBlog);
router.get('/update-blog/:id', blogController.updateBlogPage);

export default router;
