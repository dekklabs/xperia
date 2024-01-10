import express, { Application } from "express";
import routes from './routes/index'

class Server {
  private app: Application
  private port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3005'
    this.middlewares()
    this.listen()
    this.connectDB()
    this.routes()
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server runing on port ${this.port}`)
    })
  }

  connectDB() {
    const mainDB = async () => {
      try {
        console.log("connect db")
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
  }
}

export default Server
