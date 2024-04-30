import express from 'express'
import path from 'path';
import cors from 'cors'
import newsLetterRouter from './routes/newsLetterRoutes';
import userRouter from './routes/userRoutes';
import bodyParser from 'body-parser';
import contacEmailRoutes from './routes/contacEmailRoutes';
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config();
class App{

    public app: express.Application
    constructor(){
        this.app = express();
        this.configApp();
        this.routes();    
    }

    listen(port: number){
        this.app.listen(process.env.PORT || port, () => {
            console.log('Server is Running.')
        })
    }

    configApp(){
        this.app.use(cors());
        this.app.use(bodyParser.json())
        this.app.use(express.static(path.join(__dirname, '../public')));
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(morgan('tiny'));
    }

    routes(){
        this.app.use(newsLetterRouter, 
            userRouter,
            contacEmailRoutes,
        )
        this.app.use('/ping', (request, response) => {
            response.status(200).json({msg: "TOMA O PONG"})
        })
        this.app.use((request, response) => {
            response.status(404);
            response.json({msg: 'Página Não Encontrada'})
        })
    }
}

export {App}