const { User } = require('../model/user')
const bcrypt = require('bcryptjs') //加密解密
const userUtil = require('../utils/user')

/**
 * 用户注册
 * @param {*} ctx
 */
const UserRegister = async ctx => {
    try {
        const { username = '', password = '' } = ctx.request.body
        const hashPassword = bcrypt.hashSync(password, 10)
        await User.create({ username, password: hashPassword })
        ctx.body = {
            code: 200,
            data: '',
            msg: 'success',
        }
    } catch (error) {
        ctx.body = {
            code: 400,
            msg: error.message,
        }
    }
}

/**
 * 用户登录
 * @param {*} ctx
 */
const UserLogin = async ctx => {
    try {
        ctx.verifyParams({
            username: {
                type: 'string',
                required: true,
            },
            password: {
                type: 'string',
                required: true,
            },
        })
        const { username = '', password = '' } = ctx.request.body
        let res = await User.findOne({ username })
        const confirmRes = bcrypt.compareSync(password, res.password)
        if (confirmRes) {
            const token = userUtil.getToken({ username: res.username, _id: res._id })
            ctx.body = {
                code: 200,
                data: {
                    token,
                },
            }
        } else {
            ctx.body = {
                code: 400,
                msg: '账号或者密码错误',
            }
        }
    } catch (error) {
        ctx.body = {
            code: 400,
            msg: error.message,
        }
    }
}

/**
 * 用户个人信息
 * @param {*} ctx
 */
const UserInfo = async ctx => {
    try {
        let token = ctx.header.authorization
        let res = await userUtil.verifyToken(token.replace('Bearer ', ''))
        ctx.body = {
            code: 200,
            data: res,
            msg: 'success',
        }
    } catch (error) {
        ctx.body = {
            code: 400,
            msg: error.message,
        }
    }
}
module.exports = {
    UserRegister,
    UserLogin,
    UserInfo,
}
