import { Request, Response } from "express";
import { Users } from "../../entities/Users";

export const getProfile = async (req: Request, res: Response) => {
  
  const { id } = req.params
  
  const user = await Users.findOne({ where: { id } })

  const data = {
    id: user?.id,
    name: user?.name,
    lastName: user?.lastName,
    username: user?.username,
    email: user?.email
  }

  return res.json({
    error: false,
    user: data
  })
}
