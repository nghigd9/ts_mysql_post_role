import {RequestHandler} from 'express';

import {Post} from "../models/posts";

export const createPost : RequestHandler =async (req, res, next) => {
    var todos = await Post.create({...req.body});
    return res.status(200).json({
        message : "todos created successfully!",
        data : todos
    })
}

export const getListPost : RequestHandler = async (req, res ,next) => {
    return res.status(200).json({
        message : "get list post!",
    })
}
