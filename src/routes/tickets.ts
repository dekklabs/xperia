import { Router } from 'express'
import { create } from '../controller/tickets/create'
import { listTickets } from '../controller/tickets/listTickets'
import { ticketById } from '../controller/tickets/ticketById'
import { deleteTickets } from '../controller/tickets/deleteTickets'

const router = Router()

router.get("/tickets", listTickets)
router.get("/ticket/:id", ticketById)
router.post("/ticket/create", create)
router.delete("/ticket/delete/:id", deleteTickets)

export default router

