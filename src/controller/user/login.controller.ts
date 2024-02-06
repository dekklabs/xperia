import { Request, Response } from "express";
import { Users } from "../../entities/Users";
import { AppDataSource } from "../../db/connections";
import { comparePassword } from "../../helpers/comparePassword";
import { generateToken } from "../../helpers/generateToken";
import { responseData } from "../../helpers/responseData";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body
  const userRepository = AppDataSource.getRepository(Users)

  try {
    const user = await userRepository.findOne({ where: { username } })

    if (!user) {
      return validateCredentials(res)
    }

    // compare password
    const isValidPassword = comparePassword(password, user.password)

    if (!isValidPassword) {
      return validateCredentials(res)
    }

    const token = generateToken(user);

    responseData(res, "success", token)
  } catch(error) {
    console.error(error)

    return res.status(500).json({
      message: "Internal server"
    })
  }
}


const validateCredentials = (res: Response) => {
  res.status(401).json({
    message: "Invalid password"
  })
}
