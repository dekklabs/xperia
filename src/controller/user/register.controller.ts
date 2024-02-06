import { Request, Response } from "express"
import { Users } from "../../entities/Users"
import { encryptPassword } from "../../helpers/helpers"
import userExists from "../../helpers/validateUserExists"
import { generateToken } from "../../helpers/generateToken"
import { responseData } from "../../helpers/responseData"

export const register = async (req: Request, res: Response) => {
  const { 
    name, 
    username, 
    password,
    email,
  } = req.body
  console.log(req.body)

  try {
    const hashedPassword: string = await encryptPassword(password)

    const user = new Users()

    const isUserExists = await userExists(email, username)
    
    if (isUserExists) {
      return res.status(404).json({
        message: "Username or email was exists"
      })
    }

    user.name = name
    user.username = username
    user.password = hashedPassword
    user.email = email

    await user.save()

    const token = generateToken(user);

    responseData(res, `User ${name} was created suscess`, token)
  } catch(e) {
    console.error(e)
  }
}
