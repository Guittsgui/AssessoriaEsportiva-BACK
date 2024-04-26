import express, { Request, Response } from 'express'
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors'
import router from './routes/apiRoutes';

dotenv.config();

const server = express();
server.use(cors());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(router)

server.use((request, response) => {
    response.status(404);
    response.json({msg: 'Página Não Encontrada'})
})

server.listen(process.env.PORT, () => {
    console.log('RODOU -- ')
});
