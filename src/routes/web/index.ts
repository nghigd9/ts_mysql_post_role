import { Router } from "express";

import postRoutes from "./post.routes";
const router = Router();

router.use("post", postRoutes)

export default router;



