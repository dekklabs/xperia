import { Request, Response } from "express"
import { Users } from "../../entities/Users"

export const createUser = async (req: Request, res: Response) => {
  try {
    const { 
      name, 
      username, 
      password,
      email,
    } = req.body
    const user = new Users()

    user.name = name
    user.username = username
    user.password = password
    user.email = email

    await user.save()

    return res
      .status(201)
      .json({
      message: `User ${name} was created suscess`
    })
  } catch(e) {
    console.error(e)
  }
}
