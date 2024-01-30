import { Response } from "express";

export const responseData = <T>(
  res: Response, 
  message: string = '', 
  data: T
) => {
  return res.json({
    success: true,
    message,
    data
  }) 
}
