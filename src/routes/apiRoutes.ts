import { Router } from "express";
import NewsLetterController from "../controllers/NewsLetterController";


const router = Router();

    router.get('/ping', (req,res) => {
        res.status(200).json({message: 'PONG'})
    })

    router.get('/newsletter',NewsLetterController.add);



export default router;
