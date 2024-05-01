import { Router } from "express";
import ContactEmailController from "../controllers/ContactEmail/ContactEmailController";

const contacEmailRoutes = Router();

contacEmailRoutes.post('/emailcontact', ContactEmailController.sendContactEmail)
 
export default contacEmailRoutes;