import { Request, Response } from "express"
import { errorResponse } from "../../helpers/errorResponse"
import { responseData } from "../../helpers/responseData"

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = req.body
    console.log(data)
    console.log(id)

    responseData(res, "", "")
  } catch(error) {
    console.error(error)
    errorResponse('error', res)
  }
}
