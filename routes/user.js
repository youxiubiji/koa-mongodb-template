const Router = require('@koa/router')
const { UserRegister } = require('../controller/user')

const router = new Router({
    prefix: '/users',
})

router.post('/register', UserRegister)

module.exports = router
