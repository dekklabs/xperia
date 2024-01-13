import { Router } from 'express'
import { register } from '../controller/user/register.controller'
import { login } from '../controller/user/login.controller'

const router = Router()

router.post("/register", register)
router.post("/login", login)

export default router
