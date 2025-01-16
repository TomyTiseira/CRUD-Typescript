import express from 'express'
import diariesRouter from './routes/diaries.routes'
import { PORT } from './config/enviroment'
import { errorHandler } from './middleware/errorHandler'

const app = express()
app.use(express.json())

app.get('/', (_, res) => {
  res.send('Hello World')
})

app.use('/diaries', diariesRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
