import { Router } from "express";
import ContactEmailController from "../controllers/ContactEmailController";

const contacEmailRoutes = Router();

contacEmailRoutes.post('/emailcontact', ContactEmailController.addAndSendEmail)
 
export default contacEmailRoutes;