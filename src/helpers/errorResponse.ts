import { Response } from "express";

export const errorResponse = (message: string, res: Response) => {
  return res.status(500).json({
    message
  })
}
