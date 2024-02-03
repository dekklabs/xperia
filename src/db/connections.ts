import { DataSource } from "typeorm";
import { Users } from "../entities/Users";
import dotenv from 'dotenv'
import { Tickets } from "../entities/Tickets";
import { Comments } from "../entities/Comments";
import { UserDetail } from "../entities/UserDetail";

const env = process.env.NODE_ENV || 'development'

if (env === 'production') {
  dotenv.config({ path: '.env' })
} else {
  dotenv.config({ path: '.env.development' })
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.XPERIA_POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    Users, 
    Tickets,
    Comments,
    UserDetail
  ],
  subscribers: [],
  migrations: [],
})
