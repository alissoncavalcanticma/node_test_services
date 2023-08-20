import { User } from "../models/User";
//Import Bcrypt
import bcrypt from 'bcrypt';

export const createUser = async (email: string, password: string) => {
    const hasUser = User.findOne({ where: { email } });
    if(!hasUser){
        let passwordHash = bcrypt.hashSync(password, 10);
        const newUser = await User.create({
            email,
            password: passwordHash
        })
        return newUser;
    }else{
        return new Error('usuário já existe!');
    }
}

export const findByEmail = async (email: string) => {
    return await User.findOne({ where: {email} });
}

export const matchPassword = (textPassword: string, encriptedPassword: string) => {
    return bcrypt.compareSync(textPassword, encriptedPassword);
}

export const all = async () => {
    return await User.findAll();
}