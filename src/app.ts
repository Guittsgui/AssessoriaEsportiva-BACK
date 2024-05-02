import express from 'express'
import path from 'path';
import cors from 'cors'
import bodyParser from 'body-parser';
import morgan from 'morgan'
import dotenv from 'dotenv'
import newsLetterRoutes from './routes/newsLetterRoutes';
import userRoutes from './routes/userRoutes';
import contacEmailRoutes from './routes/contacEmailRoutes';
import blogPostRoutes from './routes/blogPostRoutes';

dotenv.config();
class App{

    public app: express.Application
    constructor(){
        this.app = express();
        this.configApp();
        this.configRoutes();    
    }

    configApp(){
        this.app.use(cors());
        this.app.use(bodyParser.json())
        this.app.use(express.static(path.join(__dirname, '../public')));
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(morgan('tiny'));
    }

    configRoutes(){
        this.app.use(
            newsLetterRoutes.router,
            userRoutes.router,
            contacEmailRoutes.router,
            contacEmailRoutes.router,
            blogPostRoutes.router

        )
        this.app.use((request, response) => {
            response.status(404);
            response.json({msg: 'Página Não Encontrada'})
        })
    }

    listen(port: number){
        this.app.listen(process.env.PORT || port, () => {
            console.log('Server is Running.')
        })
    }
}

export {App}