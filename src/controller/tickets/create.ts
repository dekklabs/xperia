import { Request, Response } from "express";
import { Tickets } from "../../entities/Tickets";

export const create = async (req: Request, res: Response) => {
  const { 
    title, 
    description, 
    userResportId
  } = req.body

  try {
    const ticket = new Tickets()

    ticket.title = title
    ticket.description = description
    ticket.userResportId = userResportId

    await ticket.save()

    return res.status(201).json({
      message: "ticket created"
    })
  } catch(error) {
    console.error(error)
    responseError("Internal Server", res)
  }
}

const responseError = (message: string, res: Response) => {
  return res.status(400).json({
    error: true,
    message
  })
}
