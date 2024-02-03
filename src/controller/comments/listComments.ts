import { Request, Response } from "express"
import { errorResponse } from "../../helpers/errorResponse"
import { commentsRepository } from "../../repository/comments"
import { responseData } from "../../helpers/responseData"

export const listComments = async (req: Request, res: Response) => {
  try {
    const { userId, ticketId } = req.params

    const list = await commentsRepository
      .createQueryBuilder('c')
      .innerJoinAndSelect('c.user', 'u')
      .innerJoinAndSelect('c.ticket', 't')
      .select([
        'c.comment',
        'u.username',
        't.title',
        'c.updated_at',
        'c.id'
      ])
      .where('c.userId = :userId', { userId })
      .andWhere('c.ticketId = :ticketId', { ticketId })
      .getRawMany()

    if (list.length === 0) {
      responseData(res, '', [])
    }

    const data = list.map(item => {
      return {
        id: item.c_id,
        comment: item.c_comment,
        username: item.u_username,
        title: item.t_title,
        updateAt: item.c_updated_at
      }
    })

    responseData(res, '', data)
  } catch(error) {
    console.error(error)
    errorResponse("error", res)
  }
}
