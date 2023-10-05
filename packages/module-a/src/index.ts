import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello from Express.js!' })
})

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`)
})
