import { Router } from 'express'
import { register } from '../controller/user/register.controller'
import { login } from '../controller/user/login.controller'
import { refreshToken } from '../controller/user/refreshtoken.controller'

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.post("/update-token", refreshToken)

export default router
