import { Sequelize } from "sequelize-typescript";
import {Post} from "../models/posts";
import { User } from "../models/user";
const Port:number = Number(process.env.DB_PORT);

const connection = new Sequelize(
    {
    dialect : "mysql",
    host: process.env.DB_HOST,
    port: Port,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    models : [ Post, User]
    }
)

export default connection;