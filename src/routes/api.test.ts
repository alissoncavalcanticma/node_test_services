import request from 'supertest';
import app from '../app'; // Definição do server
import { User } from '../models/User';

describe('Testing api routes',()=>{

    //Dadsos de teste
    let email       = 'test@jest.com';
    let password    = '12345';


    beforeAll(async () => {
        await User.sync({ force: true}); // Deleta tudo e recria na base de teste de acordo com o Model
    });

    it('should ping pong', (done)=>{
        request(app)
            .get('/ping')
            .then(response =>{
                expect(response.body.pong).toBe(true);
                return done();
            });
    });

    it('should register a new user', (done)=>{
        request(app)
            .post('/register')
                .send(`email=${email}&password=${password}`)
            .then(response =>{
                expect(response.body.error).toBeUndefined();
                expect(response.body).toHaveProperty('id');
                return done();
            });
    });

    it('should not allowed to register a new user with existing email', (done)=>{
        request(app)
            .post('/register')
                .send(`email=${email}&password=${password}`)
            .then(response =>{
                expect(response.body.error).not.toBeUndefined();
                return done();
            });
    });

    it('should login correctly', (done)=>{
        request(app)
            .post('/login')
                .send(`email=${email}&password=${password}`)
            .then(response =>{
                expect(response.body.error).toBeUndefined();
                expect(response.body.status).toBe(true);
                return done();
            });
    });

    it('should list users', (done)=>{
        request(app)
            .get('/list')
            .then(response =>{
                expect(response.body.error).toBeUndefined();
                expect(response.body.list.length).toBeGreaterThanOrEqual(1);
                return done();
            });
    });

});

