import { Router } from 'express'
import userRouter from './user'
import userProfileRouter from './userDetail'
import ticketRouter from './tickets'
import commentRouter from './comments'

const router = Router()

router.use("/api/v1", userRouter)
router.use("/api/v1", userProfileRouter)
router.use("/api/v1", ticketRouter)
router.use("/api/v1", commentRouter)

export default router
