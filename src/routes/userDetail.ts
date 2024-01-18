import { Router } from 'express'
import { getProfile } from '../controller/userDetail/profile'

const router = Router()

router.get("/profile/:id", getProfile)

export default router
