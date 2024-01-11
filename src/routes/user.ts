import { Router } from 'express'
import { createUser } from '../controller/user/create'

const router = Router()

router.post("/user", createUser)

export default router
