// const multer = require('@koa/multer')

// const fs = require('fs')

// const path = require('path')

// const Router = require('@koa/router')

// const router = new Router({
//     prefix: '/upload',
// })

// let upload = multer({
//     //设置文件存储位置
//     destination: function (req, file, cb) {
//         let date = new Date()
//         let year = date.getFullYear()
//         let month = date.getMonth() + 1
//         let day = date.getDay()
//         let dir = `./public/uploads/${year}/${month}/${day}`

//         //判断目录是否存在
//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir, {
//                 recursive: true,
//             })
//         }
//         cb(null, dir)
//     },
//     filename: function (req, file, cb) {
//         //设置上传文件名称
//         let fileName = file.filename + '-' + Date.now() + path.extname(file.originalname)
//         cb(null, fileName)
//     },
// })

// router.post('/uploadfile', upload.single('file'), async ctx => {
//     ctx.body = {
//         code: 200,
//         data: ctx.req.file,
//     }
// })

// module.exports = router

const Router = require('@koa/router')
const multer = require('@koa/multer')

const router = new Router()
const upload = multer();

router.post('/upload-single-file', upload.single('avatar'), ctx => {
    console.log('ctx.request.file', ctx.request.file)
    console.log('ctx.file', ctx.file)
    console.log('ctx.request.body', ctx.request.body)
    ctx.body = 'done'
})

module.exports = router