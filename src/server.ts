import express, { Request, Response } from 'express'
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors'
import newsLetterRouter from './routes/newsLetterRoutes';
import userRouter from './routes/userRoutes';


dotenv.config();

const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(newsLetterRouter, userRouter)

server.use((request, response) => {
    response.status(404);
    response.json({msg: 'Página Não Encontrada'})
})

server.listen(process.env.PORT, () => {
    console.log('RODOU -- ')
});
