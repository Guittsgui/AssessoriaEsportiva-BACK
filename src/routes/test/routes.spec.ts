import supertest from 'supertest';
import request from 'supertest';
import {App} from '../../app'

const {app} = new App();

describe("Testing NewsLetter Routes/Endpoints", () => {

    test("Testing first Endopint, PING, expect PONG.", (done) => {
        request(app)
            .get('/ping')
            .then(response => {
                expect(response.status).toBe(200)
                return done();
            })      
    })

    test("Should Register a new NewsLetter" , async  () => {
        const response = await request(app)
                        .post("/newsletter")
                        .send({email: "email@email.com"})
    })

})



