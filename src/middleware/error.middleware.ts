import { Response } from "express"

export const errorHanlder = (
  error: Error,
  res: Response,
) => {
  console.error(`Error: ${error.message}`)
  return res.status(500).json({
    message: "Internal server error"
  })
}
