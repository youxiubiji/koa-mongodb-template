const { User } = require('../model/user')

/**
 * 用户注册
 * @param {*} ctx
 */
const UserRegister = async ctx => {
    try {
        const { username = '', password = '' } = ctx.request.body
        let res = await User.create({ username, password })
        ctx.body = {
            code: 200,
            data: res,
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
        let res = await User.create({ username: 123, password: 123 })
        ctx.body = {
            code: 200,
            data: res,
        }
    } catch (error) {}
}

/**
 * 用户个人信息
 * @param {*} ctx
 */
const UserInfo = async ctx => {
    try {
        let res = await User.create({ username: 123, password: 123 })
        ctx.body = {
            code: 200,
            data: res,
        }
    } catch (error) {}
}
module.exports = {
    UserRegister,
    UserLogin,
    UserInfo,
}
