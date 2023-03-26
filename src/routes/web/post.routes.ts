import { Router } from "express";

import {getListPost, createPost} from "../../controller/post.controller"
const router = Router();

router.post("/", createPost);
router.get("/", getListPost)

export default router;