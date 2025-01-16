import mysql from 'mysql2/promise'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from './enviroment'

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
})

export default pool
