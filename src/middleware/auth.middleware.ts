import { NextFunction, Request, Response } from "express"
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"

const env = process.env.NODE_ENV || 'development'

if (env === 'production') {
  dotenv.config({ path: '.env' })
} else {
  dotenv.config({ path: '.env.development' })
}

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authentication

  if (!header) {
    return messageUnauthorized(res)
  }

  const token = header.split(" ")[1]
  if (!token) {
    return messageUnauthorized(res)
  }

  const secretKey = process.env.JWT_SECRET ?? ""
  const decode = jwt.verify(token, secretKey)
  if (!decode) {
    return messageUnauthorized(res)
  }
  next()
}

const messageUnauthorized = (res: Response) => {
  return res.status(401).json({
    message: "Unauthorized"
  })
}
