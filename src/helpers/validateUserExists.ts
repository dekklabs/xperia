import { Users } from "../entities/Users"

const userExists = async (email: string, username: string) => {
  return Users.exists({ where: { email, username } })
}

export default userExists
