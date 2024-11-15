import { Router } from "express";
import animeRouter from "../../../modules/animes/infra/http/routes/animes.routes";

const router = Router()

router.use('/animes', animeRouter)

export default router