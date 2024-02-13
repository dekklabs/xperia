import { Router } from 'express'
import { getProfile } from '../controller/userDetail/profile'
import { authentication } from '../middleware/auth.middleware'

const router = Router()

router.get("/profile/:id", authentication, getProfile)

export default router
