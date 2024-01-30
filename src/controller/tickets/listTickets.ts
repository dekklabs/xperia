import { Request, Response } from "express"
import { errorResponse } from "../../helpers/errorResponse"
import { AppDataSource } from "../../db/connections"
import { Tickets } from "../../entities/Tickets"
import { responseData } from "../../helpers/responseData"

export const listTickets = async (_: Request, res: Response) => {
  try {
    const ticketRepository = AppDataSource.getRepository(Tickets)

    const tickets = await ticketRepository.find()

    responseData(res, '', tickets)
  } catch(error) {
    console.error(error)
    errorResponse("error", res)
  }
}
