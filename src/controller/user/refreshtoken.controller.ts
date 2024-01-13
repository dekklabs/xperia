import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { generateToken } from '../../helpers/generateToken'

export const refreshToken = async (req: Request, res: Response) => {
  const { token } = req.body

  const key = process.env.JWT_SECRET ?? ""

  try {

  } catch(error) {
    return res.status(503).json({

    })
  }

  jwt.verify(token, key, (error: any, user: any) => {
    if (error) {
      return res.status(403).json({
        message: "Token is not v alid"
      })
    }

    const newToken = generateToken(user);

    res.json({
      token: newToken
    })
  })
}
