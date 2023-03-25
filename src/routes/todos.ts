import { Router } from "express";

import { createTodo, getListTodo } from "../controller/todo";

const router = Router();

router.post("/", createTodo);
router.get("/", getListTodo)

export default router;