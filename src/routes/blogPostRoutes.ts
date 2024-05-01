
import { Router } from 'express';
import BlogPostController from "../controllers/BlogPost/BlogPostController";
class BlogPostRoutes{

    router : Router

    constructor(){
        this.router = Router();
        this.router.get('/blogpost', BlogPostController.getAll)
        this.router.get('/blogpost/:id', BlogPostController.getByID)
        this.router.post('/blogpost', BlogPostController.add)
        this.router.put('/blogpost/:id', BlogPostController.edit)
        this.router.delete('/blogpost/:id' , BlogPostController.delete)
    }
}

export default new BlogPostRoutes();

