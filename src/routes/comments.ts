import { Router } from 'express'
import { createComments } from '../controller/comments/createComments'
import { listComments } from '../controller/comments/listComments'
import { deleteComment } from '../controller/comments/deleteComment'

const router = Router()

router.post("/comment/create", createComments)
router.get("/comments/user/:userId/ticket/:ticketId", listComments)
router.delete("/comments/delete/:id", deleteComment)

export default router
