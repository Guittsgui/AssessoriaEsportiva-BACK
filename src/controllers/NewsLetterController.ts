import {Request, Response} from "express"

class NewsLetterController {

    add(req:Request,res:Response){
        res.status(200).json({msg: "CHEGOU PRA CARALHO"})
    }


}

export default new NewsLetterController();