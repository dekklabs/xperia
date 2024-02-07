import { Request, Response } from "express";
import { Tickets } from "../../entities/Tickets";
import { validateRequestFields } from "../../helpers/validateRequestFields";

export const create = async (req: Request, res: Response) => {
  const { 
    title, 
    description, 
    userId
  } = req.body

  const validateBody = validateRequestFields([title, description, userId], req)

  if (!validateBody) {
    responseError("Todos los campos son necesarios", res)
  }

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
