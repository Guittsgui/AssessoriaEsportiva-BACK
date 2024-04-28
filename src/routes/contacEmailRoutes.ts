import { Router } from "express";
import ContactEmailController from "../controllers/ContactEmailController";

const newsLetterRouter = Router();

newsLetterRouter.post('/newsletter', ContactEmailController.addAndSendEmail)
 
export default newsLetterRouter;