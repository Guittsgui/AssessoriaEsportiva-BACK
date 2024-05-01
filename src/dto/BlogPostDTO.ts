class BlogPostDTO{

    title: string;
    bodyText: string;
    urlImage: string;
    ownerPostId: number;


    constructor(title:string, bodyText: string, urlImage: string, ownerPostId: number){
        this.title = title;
        this.bodyText = bodyText;
        this.urlImage = urlImage;
        this.ownerPostId = ownerPostId;
    }

}

export default BlogPostDTO