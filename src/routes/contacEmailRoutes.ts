import { Router } from "express";
import ContactEmailController from "../controllers/ContactEmail/ContactEmailController";

class ContactEmailRoutes{

    router: Router

    constructor(){
        this.router = Router();
        this.router.post('/emailcontact', ContactEmailController.sendContactEmail)
    }
}

export default new ContactEmailRoutes()