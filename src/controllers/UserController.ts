import { Request, Response } from "express";

class UserController{

    getAll(req: Request, res: Response){
        res.status(200).json({msg: "Chegou Direitin no Controller"})
    }

    getByID(){

    }

    add(){

    }

    update(){

    }

    removeById(){

    }



}

export default new UserController();