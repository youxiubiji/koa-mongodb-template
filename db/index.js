const mongoose = require('mongoose')

module.exports = () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/demo')
        .then(() => {
            console.log('连接成功')
        })
        .catch(() => {
            console.log('连接失败')
        })
}
