const { User } = require('../model/user')

const UserRegister = async ctx => {
    await User.create({ username: 123, password: 123 })
        .then(res => {
            ctx.body = {
                code: 200,
                data: res,
            }
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    UserRegister,
}
