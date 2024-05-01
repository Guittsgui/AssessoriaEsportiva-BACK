import { Router } from "express";
import BlogPostController from "../controllers/BlogPost/BlogPostController";


const blogPostsRoutes = Router();

blogPostsRoutes.get('/blogpost', BlogPostController.getAll)
blogPostsRoutes.get('/blogpost/:id', BlogPostController.getByID)
blogPostsRoutes.post('/blogpost', BlogPostController.add)
blogPostsRoutes.put('/blogpost/:id', BlogPostController.edit)
blogPostsRoutes.delete('/blogpost/:id' , BlogPostController.delete)
 
export default blogPostsRoutes;