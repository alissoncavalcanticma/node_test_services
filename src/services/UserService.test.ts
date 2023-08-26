import * as UserService from './UserService';
import { User, UserInstance } from '../models/User';

describe('Testing UserService', () => {

    //Dadsos de teste
    let email       = 'test@jest.com';
    let password    = '12345';


    beforeAll(async () => {
        await User.sync({ force: true}); // Deleta tudo e recria na base de teste de acordo com o Model
    });

    //createuser
    it('should create a new user', async()=>{
        const newUser = await UserService.createUser(email, password) as UserInstance;

        expect(newUser).not.toBeInstanceOf(Error);
        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe(email);
    });

    it('should not allow to reate a user with existing email', async() => {
        const newUser = await UserService.createUser(email, password);
        expect(newUser).toBeInstanceOf(Error);
    });

    it('should find user by email', async()=>{
        const user = await UserService.findByEmail(email);
        expect(user?.email).toBe(email);
    });

    it('should match the password from database', async()=>{
        const user = await UserService.findByEmail(email) as UserInstance;
        const match = UserService.matchPassword(password, user.password);
        expect(match).toBe(true);
    });

    it('should not match the password from database', async()=>{
        const user = await UserService.findByEmail(email) as UserInstance;
        const match = UserService.matchPassword('123', user.password);
        expect(match).toBe(false);
    });

    it('should get a list of users from database', async()=>{
        const list = await UserService.all();
        expect(list.length).toBeGreaterThanOrEqual(1);
        for(let i in list){
            expect(list[i]).toBeInstanceOf(User);
        }

    });

});
