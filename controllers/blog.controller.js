import BlogModel from "../models/blog.model.js";
import fs from "fs";

const blogController = {
    addBlogPage(req, res) {
        return res.render('./pages/add-blog.ejs');
    },

    async addBlog(req, res) {
        try {
            req.body.image = req.file.path;
            req.body.userId = res.locals.user.id;
            let data = await BlogModel.create(req.body);
            console.log("Blog Created", data.id);
            return res.redirect(req.get('Referrer') || '/');
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get('Referrer') || '/');
        }
    },

    async getAllMyBlogs(req, res) {
        try {
            const id = res.locals.user.id;
            const blogs = await BlogModel.find({ userId: id });
            console.log(blogs);
            return res.render('./pages/get-all-myblogs.ejs', { blogs });
        } catch (error) {
            console.log(error.message);
            return res.render('./pages/get-all-myblogs.ejs', { blogs: [] });
        }
    },

    async getAllBlogs(req, res) {
        const blogs = await BlogModel.find({});
        console.log(blogs);
        return res.render('./pages/get-all-blogs.ejs', {
            blogs
        })
    },

    async deleteBlog(req, res) {
        try {
            const id = req.params.id;
            const blog = await BlogModel.findById(id);
            fs.unlinkSync(blog.image);
            await BlogModel.findByIdAndDelete(id);
            return res.redirect(req.get('Referrer') || '/');
        } catch (error) {
            console.log(error.message);
            return res.redirect(req.get('Referrer') || '/');
        }
    },

    async updateBlogPage(req,res){
        try {
            const {id} = req.params;
            const blog = await BlogModel.findById(id);
            return res.render('./pages/edit-blog.ejs',{
                blog
            })
        } catch (error) {
            console.log(error.message);
        }
    },

    async updateBlog(req,res){
        try {
            const {id} = req.params;
            const blog = await BlogModel.findById(id)
            if(req.file){
                try {
                   fs.unlinkSync(blog.image); 
                } catch (error) {
                    console.log(error.message)
                }
                req.body.image = req.file.path;
            }
            await BlogModel.findByIdAndUpdate(id,req.body);

            return res.redirect('/get-all-myblogs')
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default blogController;