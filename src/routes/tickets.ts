import { Router } from 'express'
import { create } from '../controller/tickets/create'
import { listTickets } from '../controller/tickets/listTickets'
import { ticketById } from '../controller/tickets/ticketById'
import { deleteTickets } from '../controller/tickets/deleteTickets'
import { updateTicket } from '../controller/tickets/updateTicket'
import { authentication } from '../middleware/auth.middleware'

const router = Router()

router.get("/tickets", authentication, listTickets)
router.get("/ticket/:id", authentication, ticketById)
router.post("/ticket/create", authentication, create)
router.delete("/ticket/delete/:id", authentication, deleteTickets)
router.put("/ticket/update/:id", authentication, updateTicket)

export default router

