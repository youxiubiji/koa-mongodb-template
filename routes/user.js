const Router = require('@koa/router')
const { UserRegister, UserLogin, UserInfo } = require('../controller/user')

const router = new Router({
    prefix: '/users',
})

//用户注册
router.post('/register', UserRegister)
//用户登录
router.post('/login', UserLogin)
//用户信息
router.get('/info', UserInfo)

module.exports = router
