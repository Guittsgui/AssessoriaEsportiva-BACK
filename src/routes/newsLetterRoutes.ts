import { Router } from "express";
import NewsLetterController from "../controllers/NewsLetterController";

const newsLetterRouter = Router();


newsLetterRouter.get('/newsletter', NewsLetterController.test)
newsLetterRouter.post('/newsletter', NewsLetterController.add)
 


export default newsLetterRouter;