import { Request, Response } from "express"
import { errorResponse } from "../../helpers/errorResponse"
import { commentsRepository } from "../../repository/comments"
import { responseData } from "../../helpers/responseData"

export const listComments = async (req: Request, res: Response) => {
  try {
    const { ticketId } = req.params

    const list = await commentsRepository
      .createQueryBuilder('c')
      .innerJoinAndSelect('c.ticket', 't')
      .innerJoinAndSelect('t.user', 'u')
      .select([
        'c.comment',
        'c.id',
        'c.updated_at',
        'u.username',
        'u.name',
        'u.lastName',
        't.title',
      ])
      .where('c.ticketId = :ticketId', { ticketId })
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
        name: item.u_name,
        lastName: item.u_lastName,
        updateAt: item.c_updated_at
      }
    })

    responseData(res, '', data)
  } catch(error) {
    console.error(error)
    errorResponse("error", res)
  }
}
