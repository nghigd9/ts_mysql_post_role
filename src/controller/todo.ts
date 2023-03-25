import {RequestHandler} from 'express';

import {Todos} from "../models/todos";

export const createTodo : RequestHandler =async (req, res, next) => {
    var todos = await Todos.create({...req.body});
    return res.status(200).json({
        message : "todos created successfully!",
        data : todos
    })
}

export const getListTodo : RequestHandler = async (req, res ,next) => {
    return res.status(200).json({
        message : "get list todo!",
    })
}
