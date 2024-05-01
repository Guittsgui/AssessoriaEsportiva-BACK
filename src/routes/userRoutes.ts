import { Router } from "express";
import UserController from "../controllers/UserController/UserController";

const userRouter = Router();

    userRouter.get('/users')
    userRouter.get('/user/:id')
    userRouter.post('/user', UserController.add)
    userRouter.put('/user')
    userRouter.delete('/:id')
    userRouter.post('/login', UserController.validateLogin)

export default userRouter;