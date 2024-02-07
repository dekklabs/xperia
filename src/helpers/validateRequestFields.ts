import { Request } from "express"

export const validateRequestFields = (fields: string[], req: Request) => {
  const errors = []

  fields.forEach((field: string) => {
    if (!req.body[field] || req.body[field].toString().trim().length === 0) {
      errors.push(`The field ${field} is necesary and can not be empty`)
    }
  })

  return errors.length > 0
}
