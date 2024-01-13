import dotenv from 'dotenv'

export const loadEnvs = () => {
  const env = process.env.NODE_ENV || 'development'

  if (env === 'production') {
    dotenv.config({ path: '.env' })
  } else {
    dotenv.config({ path: '.env.development' })
  }
}
