import { Request, Response } from "express";
import { responseData } from "../../helpers/responseData";
import { errorResponse } from "../../helpers/errorResponse";
import { ticketRepository } from "../../repository/tickets";
import { Tickets } from "../../entities/Tickets";

export const deleteTickets = async (req: Request, res: Response) => {
  try {
    const ticket = new Tickets()
    const { id } = req.params

    if (id.length === 0) {
      errorResponse('id es necesario', res)
    }

    ticket.status = "DELETED"

    await ticketRepository
      .createQueryBuilder()
      .update(ticket)
      .where("id = :id", {id})
      .execute()
    
    return responseData(res, 'Ticket was deleted', "")
  } catch(e) {
    console.error(e)
    errorResponse('error', res)
  }
}
