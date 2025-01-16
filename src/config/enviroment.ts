import * as dotenv from 'dotenv'
dotenv.config()

export const {
  PORT = 3000,
  DB_HOST = 'localhost',
  DB_USER = 'root',
  DB_PASSWORD,
  DB_DATABASE
} = process.env
