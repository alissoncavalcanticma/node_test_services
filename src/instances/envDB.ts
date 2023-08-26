import dotenv from 'dotenv';

dotenv.config();

let env = process.env.NODE_ENV === 'test' ? '_TEST' : '';

let envDB = {
    db:         process.env[`MYSQL${env}_DB`] as string,
    user:       process.env[`MYSQL${env}_USER`] as string,
    password:   process.env[`MYSQL${env}_PASSWORD`] as string
}

export default envDB;