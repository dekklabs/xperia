import { Request, Response } from "express"
import { errorResponse } from "../../helpers/errorResponse"
import { commentsRepository } from "../../repository/comments"
import { Comments } from "../../entities/Comments"
import { responseData } from "../../helpers/responseData"

export const createComments = async (req: Request, res: Response) => {
  try {
    const comments = new Comments()

    const { 
      comment,
      ticketId, 
      userId
    } = req.body

    if (ticketId.length === 0) {
      return errorResponse("ticketId not found", res)
    }

    if (userId.length === 0) {
      return errorResponse("userId not found", res)
    }

    if (comment.length === 0) {
      return errorResponse("Comment is required", res)
    }

    comments.comment = comment
    comments.ticketId = ticketId
    comments.userId = userId
    
    await commentsRepository.save(comments)

    responseData(res, "Comment registered", "")
  } catch(error) {
    console.error(error)
    errorResponse("error", res)
  }
}
