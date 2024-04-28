import express, { Request, Response } from 'express'
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors'
import newsLetterRouter from './routes/newsLetterRoutes';
import userRouter from './routes/userRoutes';
import bodyParser from 'body-parser';
import contacEmailRoutes from './routes/contacEmailRoutes';


dotenv.config();

const server = express();

server.use(bodyParser.json())
server.use(cors());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(
    newsLetterRouter, 
    userRouter,
    contacEmailRoutes,
)

server.use((request, response) => {
    response.status(404);
    response.json({msg: 'Página Não Encontrada'})
})

server.listen(process.env.PORT, () => {
    console.log('RODOU -- ')
});
