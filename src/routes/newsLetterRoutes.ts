import { Router } from "express";
import NewsLetterController from "../controllers/NewsLetterController";

const newsLetterRouter = Router();

    newsLetterRouter.get('/newsLetter', NewsLetterController.add)
 


export default newsLetterRouter;