import { Users } from "../../entities/Users"

export const getUser = async (idUser: string) => {
  const user = await Users.findOneById(idUser);

  return user
}
