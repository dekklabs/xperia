import express, { Application } from "express";
import cors from 'cors'
import routes from './routes/index'
import { AppDataSource } from "./db/connections";

class Server {
  private app: Application
  private port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3005'
    this.middlewares()
    this.listen()
    this.routes()
    this.connectDB()
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server runing on port ${this.port}`)
    })
  }

  connectDB() {
    const mainDB = async () => {
      try {
        await AppDataSource.initialize()
      } catch(e) {
        console.error(e)
      }
    }

    mainDB()
  }

  routes() {
    this.app.use(routes)
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }
}

export default Server
