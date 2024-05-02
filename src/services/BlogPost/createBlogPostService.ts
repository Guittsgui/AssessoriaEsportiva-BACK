import BlogPostDTO from "../../dto/BlogPostDTO"
import BlogPostRepository from "../../repositories/BlogPost/blogPostRepository"
import InMemoryBlogPostRepository from "../../repositories/BlogPost/InMemoryBlogPostRepository"

class CreateBlogPostService{

    blogPostRepository: typeof BlogPostRepository | typeof InMemoryBlogPostRepository

    constructor(blogPostRepository: typeof BlogPostRepository | typeof InMemoryBlogPostRepository){
        this.blogPostRepository = blogPostRepository
    }

    async execute(blogPost: BlogPostDTO){
        
        const post = blogPost;

        if(!post.title || !post.bodyText || !post.ownerPostId){
            throw new Error("Campos não podem ser Nulos.")
        }

       const result = await this.blogPostRepository.add(post);
       return result;
    }
}

export default CreateBlogPostService