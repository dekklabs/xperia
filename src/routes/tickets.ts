import { Router } from 'express'
import { create } from '../controller/tickets/create'
import { listTickets } from '../controller/tickets/listTickets'
import { ticketById } from '../controller/tickets/ticketById'
import { deleteTickets } from '../controller/tickets/deleteTickets'
import { updateTicket } from '../controller/tickets/updateTicket'

const router = Router()

router.get("/tickets", listTickets)
router.get("/ticket/:id", ticketById)
router.post("/ticket/create", create)
router.delete("/ticket/delete/:id", deleteTickets)
router.put("/ticket/update/:id", updateTicket)

export default router

