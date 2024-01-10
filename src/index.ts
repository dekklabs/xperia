import "reflect-metadata"
import dotenv from 'dotenv'
import Server from './server'

const env = process.env.NODE_ENV || 'development'

if (env === 'production') {
  dotenv.config({ path: '.env' })
} else {
  dotenv.config({ path: '.env.development' })
}

new Server()
