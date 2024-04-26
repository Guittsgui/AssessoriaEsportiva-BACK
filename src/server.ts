import express, { Request, Response } from 'express'
import path from 'path';
import dotenv from 'dotenv'

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));


server.use((request, response) => {
    response.status(404);
    response.json({msg: 'Página Não Encontrada'})
})

server.listen(process.env.PORT, () => {
    console.log('RODOU -- ')
});
