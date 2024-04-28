import { Router } from "express";
import ContactEmailController from "../controllers/ContactEmailController";

const contacEmailRoutes = Router();

contacEmailRoutes.post('/newsletter', ContactEmailController.addAndSendEmail)
 
export default contacEmailRoutes;