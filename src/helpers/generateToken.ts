import { User } from "../types/user"
import jwt from 'jsonwebtoken'
import { loadEnvs } from "./loadEnv"

loadEnvs()

export const generateToken = (user: User) => {
  const payload = {
    id: user.id,
    username: user.username,
    name: user.name,
    lastName: user.lastName,
    email: user.email
  }

  const secret = process.env.JWT_SECRET ?? ""

  const options = { expiresIn: '1h' }

  return jwt.sign(payload, secret, options)
}
