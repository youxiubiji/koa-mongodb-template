const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const MongoConnect = require('./db')

MongoConnect()

app.use(json())

app.use(bodyParser())

const users = require('./routes/user')

app.use(users.routes(), users.allowedMethods())

module.exports = app
