const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        default: '',
    },
})

const User = mongoose.model('users', UserSchema)

module.exports = {
    User
}
