import { Request, Response } from "express";
import { responseData } from "../../helpers/responseData";
import { errorResponse } from "../../helpers/errorResponse";
import { ticketRepository } from "../../repository/tickets";

export const deleteTickets = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await ticketRepository.delete({ id })
    
    return responseData(res, '', "ok")
  } catch(e) {
    console.error(e)
    errorResponse('error', res)
  }
}
