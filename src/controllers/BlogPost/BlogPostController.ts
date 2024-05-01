import {Request, Response} from 'express'
import BlogPostDTO from '../../dto/BlogPostDTO';
import CreateBlogPostService from '../../services/BlogPost/createBlogPostService';
import BlogPostRepository from '../../repositories/BlogPost/blogPostRepository';

class BlogPostController{


    getAll(req:Request , res:Response){

    }

    add(req:Request , res:Response){
        const {title, bodyMessage, urlImage, ownerPostId } = req.body
        const blogPostDTO = new BlogPostDTO(title,bodyMessage,urlImage,ownerPostId)

        try {
            const blogPostService = new CreateBlogPostService(BlogPostRepository)
            const result = blogPostService.execute(blogPostDTO)
        } catch (error) {
            
        }
    }

    getByID(req:Request , res:Response){

    }

    edit(req:Request , res:Response){
        
    }

    delete(req:Request , res:Response){

    }




}

export default new BlogPostController();