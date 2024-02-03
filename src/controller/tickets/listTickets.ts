import { Request, Response } from "express"
import { errorResponse } from "../../helpers/errorResponse"
import { AppDataSource } from "../../db/connections"
import { Tickets } from "../../entities/Tickets"
import { responseData } from "../../helpers/responseData"
import { Not } from "typeorm"

export const listTickets = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    const ticketRepository = AppDataSource.getRepository(Tickets)

    const tickets = await ticketRepository.findAndCount({
      take: limit,
      skip,
      where: {
        status: Not("DELETED")
      }
    })

    responseData(res, '', tickets)
  } catch(error) {
    console.error(error)
    errorResponse("error", res)
  }
}
