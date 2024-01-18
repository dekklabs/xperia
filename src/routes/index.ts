import { Router } from 'express'
import userRouter from './user'
import userProfileRouter from './userDetail'

const router = Router()

router.use("/api/v1", userRouter)
router.use("/api/v1", userProfileRouter)

export default router
