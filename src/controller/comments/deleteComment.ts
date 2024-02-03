import { Request, Response } from "express"
import { errorResponse } from "../../helpers/errorResponse"
import { commentsRepository } from "../../repository/comments"
import { responseData } from "../../helpers/responseData"

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    if (!id || id.length === 0) {
      errorResponse("Id is required", res)
    }

    await commentsRepository.delete({ id })

    return responseData(res, 'Comment deleted', '')
  } catch(error) {
    console.error(error)
    errorResponse("error", res)
  }
}
