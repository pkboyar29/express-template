import express, { Express } from 'express'
import bodyParser from 'body-parser'
import db from './db'
import * as todoRouter from './controller/todo.controller'

const app: Express = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/todos', todoRouter.default)

function startServer() {
   db().sync()
   app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`)
   })
}

startServer()