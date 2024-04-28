import { Router } from "express";
import NewsLetterController from "../controllers/NewsLetterController";

const newsLetterRouter = Router();

newsLetterRouter.post('/newsletter', NewsLetterController.add)
 
export default newsLetterRouter;