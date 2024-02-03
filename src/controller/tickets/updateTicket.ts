import { Request, Response } from "express"
import { errorResponse } from "../../helpers/errorResponse"
import { responseData } from "../../helpers/responseData"
import { Tickets } from "../../entities/Tickets"
import { ticketRepository } from "../../repository/tickets"

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const ticket = new Tickets()
    const { id } = req.params
    const { title, description } = req.body

    ticket.title = title
    ticket.description = description

    await ticketRepository
      .createQueryBuilder()
      .update(ticket)
      .set({ title, description })
      .where("id = :id", {id})
      .execute()

    responseData(res, "Ticket updated", "")
  } catch(error) {
    console.error(error)
    errorResponse('error', res)
  }
}
