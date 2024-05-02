import BlogPostDTO from "../../dto/BlogPostDTO";

class InMemoryBlogPostRepository{

    postList: BlogPostDTO[]

    constructor(){
        this.postList = []
    }

    add(blogPostDTO: BlogPostDTO){
        this.postList.push(blogPostDTO)
    }

}

export default new InMemoryBlogPostRepository()