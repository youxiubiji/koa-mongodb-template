const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const parameter = require('koa-parameter')
const koaJwt = require('koa-jwt') //路由权限控制

const MongoConnect = require('./db')
const { token: tokenConfig } = require('./utils/config')

MongoConnect()

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use((ctx, next) => {
    return next().catch(err => {
        if (401 == err.status) {
            ctx.body = {
                code: 401,
                msg: 'Protected resource, use Authorization header to get access',
            }
        } else {
            throw err
        }
    })
})

app.use(
    koaJwt({ secret: tokenConfig.secret }).unless({
        path: [/^\/users\/register/, /^\/users\/login/],
    })
)

app.use(json())

// Post请求
app.use(bodyParser())

//验证器，放在请求体后
app.use(parameter(app))

const users = require('./routes/user')

app.use(users.routes(), users.allowedMethods())

module.exports = app
