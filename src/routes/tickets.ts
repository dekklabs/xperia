import { Router } from 'express'
import { create } from '../controller/tickets/create'
import { listTickets } from '../controller/tickets/listTickets'
import { ticketById } from '../controller/tickets/ticketById'

const router = Router()

router.get("/tickets", listTickets)
router.get("/ticket/:id", ticketById)
router.post("/ticket/create", create)

export default router

