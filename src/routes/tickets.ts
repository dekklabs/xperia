import { Router } from 'express'
import { create } from '../controller/tickets/create'

const router = Router()

router.post("/ticket/create", create)

export default router

