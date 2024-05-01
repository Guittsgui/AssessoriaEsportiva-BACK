import { Router } from "express";
import ContactEmailController from "../controllers/ContactEmail/ContactEmailController";
import contacEmailRoutes from './contacEmailRoutes';

// const contacEmailRoutes = Router();

// contacEmailRoutes.post('/emailcontact', ContactEmailController.sendContactEmail)
 
// export default contacEmailRoutes;


class ContactEmailRoutes{

    router: Router

    constructor(){
        this.router = Router();
        this.router.post('/emailcontact', ContactEmailController.sendContactEmail)
    }
}

export default new ContactEmailRoutes()