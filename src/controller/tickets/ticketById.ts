import { Request, Response } from "express";
import { errorResponse } from "../../helpers/errorResponse";
import { ticketRepository } from "../../repository/tickets";
import { responseData } from "../../helpers/responseData";

export const ticketById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const ticket = await ticketRepository.findOne({ where: { id } })

    responseData(res, '', ticket)
  } catch(error) {
    console.error(error)
    errorResponse("errror", res)
  }
}
