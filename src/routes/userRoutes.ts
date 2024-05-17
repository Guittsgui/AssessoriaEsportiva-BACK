import { Router } from "express";
import UserController from "../controllers/UserController/UserController";

class UserRoutes{

    router: Router

    constructor(){
        this.router = Router();
        this.router.get('/users')
        this.router.get('/user/:id')
        this.router.post('/user', UserController.add)
        this.router.put('/user')
        this.router.delete('/:id')
        this.router.post('/login', UserController.validateLogin)
        this.router.post('/changepassword', UserController.changePassword)
    }

}

export default new UserRoutes();