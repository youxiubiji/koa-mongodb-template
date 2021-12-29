const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            dropDups: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            default: '',
        },
        email: {
            type: String,
            default: '',
        },
    },
    { timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' } }
)

const User = mongoose.model('users', UserSchema)

module.exports = {
    User,
}
