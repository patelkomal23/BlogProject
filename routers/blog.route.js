import { Router } from "express";
import blogController from "../controllers/blog.controller.js";
import imageUpload from "../middlewares/imageUpload.js";

const router = Router();

router.get('/add-blog',blogController.addBlogPage);
router.post('/add-blog',imageUpload, blogController.addBlog);
router.get('/get-all-myblogs',blogController.getAllMyBlogs);
router.get('/get-all-blogs',blogController.getAllBlogs);

router.get('/delete-blog/:id',blogController.deleteBlog);
router.get('/update-blog/:id',blogController.updateBlogPage);
router.post('/update-blog/:id',imageUpload, blogController.updateBlog);

export default router;