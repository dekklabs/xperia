import bcrypt from 'bcryptjs'

const saltRounds = 10

export const encryptPassword = (password: string) => {
  try {
    return bcrypt.hash(password, saltRounds)
  } catch(error) {
    console.error(`Error comparing password: `, error)
    throw error
  }
}
