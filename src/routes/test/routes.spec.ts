import supertest from 'supertest';
import request from 'supertest';
import {App} from '../../app'

const {app} = new App();

describe("Testing NewsLetter Endpoints", () => {

    let email = "teste@email.com"


    test("Testing first Endopint, PING, expect PONG.", (done) => {
        request(app)
            .get('/ping')
            .then(response => {
                expect(response.status).toBe(200)
                return done();
            })      
    })

    test("Should Register a new User " , (done) => {

        request(app)
            .post('/newsletter')
            .send(`email=${email}`)
            .then(response => {
                //console.log(response)
                return done();
            })
    })



})

