import { Router } from "express";
import NewsLetterController from "../controllers/NewsLetter/NewsLetterController";

class NewsLetterRoutes{
    router: Router

    constructor(){
        this.router = Router();
        this.router.post('/newsletter', NewsLetterController.add)
    }

}

export default new NewsLetterRoutes()