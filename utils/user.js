// 签发、解析`token`
const jwt = require('jsonwebtoken')
const { token: tokenConfig } = require('./config')

// 获取token
function getToken(payload = {}) {
    return jwt.sign(payload, tokenConfig.secret, { expiresIn: tokenConfig.expiresIn })
}

// 解析token
function verifyToken(token) {
    return jwt.verify(token, tokenConfig.secret)
}

module.exports = {
    getToken,
    verifyToken,
}
