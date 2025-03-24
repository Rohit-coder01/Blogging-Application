import express from 'express'
import connecttomongo from './config/db.js'
import authRoutes from "./routes/blog.js"
import cors from 'cors'
const app = express()
const port = 3000

connecttomongo(); //function call

app.use(cors());

app.use(express.json());

app.use(express.static("upload/public"))
app.get('/', (req, res) => {
  res.send('Helo World!')
})

//api routes
app.use("/api/v1",authRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})                