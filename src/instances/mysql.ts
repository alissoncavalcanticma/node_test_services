import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import envDB from "./envDB";

dotenv.config();

export const sequelize = new Sequelize(
    envDB.db,
    envDB.user,
    envDB.password,
    {
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
    }

);