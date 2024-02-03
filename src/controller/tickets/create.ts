import { Request, Response } from "express";
import { Tickets } from "../../entities/Tickets";

export const create = async (req: Request, res: Response) => {
  const { 
    title, 
    description, 
    userId
  } = req.body

  try {
    const ticket = new Tickets()

    ticket.title = title
    ticket.description = description
    ticket.userId = userId

    await ticket.save()

    return res.status(201).json({
      message: "ticket created"
    })
  } catch(error) {
    responseError("Error create ticket", res)
  }
}

const responseError = (message: string, res: Response) => {
  return res.status(400).json({
    error: true,
    message
  })
}
