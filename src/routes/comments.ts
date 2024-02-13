import { Router } from 'express'
import { createComments } from '../controller/comments/createComments'
import { listComments } from '../controller/comments/listComments'
import { deleteComment } from '../controller/comments/deleteComment'
import { authentication } from '../middleware/auth.middleware'

const router = Router()

router.post("/comment/create", authentication, createComments)
router.get("/comments/ticket/:ticketId", authentication, listComments)
router.delete("/comment/delete/:id", authentication, deleteComment)

export default router
