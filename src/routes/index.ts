import { Router } from 'express'
import userRouter from './user'

const router = Router()

router.use("/api/v1", userRouter)

export default router
