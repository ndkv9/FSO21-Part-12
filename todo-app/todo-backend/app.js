require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const todosRouter = require('./routes/todos')
const redis = require('./redis')

const app = express()

app.use(cors())

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.get('/statistics', async (_req, res) => {
  const added_todos = await redis.getAsync('todos')
  res.json({
    added_todos: added_todos || 0,
  })
})
app.use('/todos', todosRouter)

module.exports = app
