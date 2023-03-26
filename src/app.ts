import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import startMigrate, {testEager} from "./controller/migration.controller";


import express, { urlencoded, json} from 'express';
import webRoutes from "./routes/web/index"

import connection from './db/config';

const app = express();

app.use(json());
app.use(urlencoded({extended : true}));


app.use("/", webRoutes)

app.use((
    err : Error,
    req : express.Request,
    res : express.Response,
    next : express.NextFunction
) => {
    res.status(500).json({message : err.message})
})

connection.sync({force : true, alter : true}).then(() => {
    console.log("synched db");
    startMigrate();
}).catch(err => {
    console.log(err)
})

app.listen(3000)
