import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

    userRouter.get('/users', UserController.getAll)
    userRouter.get('/user/:id', UserController.getByID)
    userRouter.post('/user', UserController.add)
    userRouter.put('/user')
    userRouter.delete('/:id')

export default userRouter;