import "reflect-metadata"
import dotenv from 'dotenv'

const env = process.env.NODE_ENV || 'development'

if (env === 'production') {
  dotenv.config({ path: '.env' })
} else {
  dotenv.config({ path: '.env.development' })
}








import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
