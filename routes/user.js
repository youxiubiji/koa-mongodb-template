const Router = require('@koa/router')
const { UserRegister, UserLogin, UserInfo } = require('../controller/user')

const router = new Router({
    prefix: '/users',
})

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: 用户注册
 *     tags:
 *      - user
 *     parameters:
 *       - name: username
 *         description: 用户账户
 *         required: true
 *         in: formData
 *         type: string
 *       - name: password
 *         description: 用户密码
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       "200":
 *         description: "success"
 *       "400":
 *         description: "fial"
 *       "401":
 *         description: "use Authorization header to get access"
 *       "500":
 *         description: "error"
 */
router.post('/register', UserRegister)

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: 用户登录
 *     tags:
 *      - user
 *     parameters:
 *       - name: username
 *         description: 用户账户
 *         required: true
 *         in: formData
 *         type: string
 *       - name: password
 *         description: 用户密码
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       "200":
 *         description: "success"
 *       "400":
 *         description: "fial"
 *       "401":
 *         description: "use Authorization header to get access"
 *       "500":
 *         description: "error"
 */
router.post('/login', UserLogin)
/**
 * @swagger
 * /users/info:
 *   get:
 *     summary: 用户信息
 *     tags:
 *      - user
 *     responses:
 *       "200":
 *         description: "success"
 *       "400":
 *         description: "fial"
 *       "401":
 *         description: "use Authorization header to get access"
 *       "500":
 *         description: "error"
 */
router.get('/info', UserInfo)

module.exports = router
