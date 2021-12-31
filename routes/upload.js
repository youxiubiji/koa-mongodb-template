const multer = require('@koa/multer')
const Router = require('@koa/router')

const router = new Router({
    prefix: '/upload',
})

//上传文件存放路径、及文件命名
const storage = multer.diskStorage({
    destination: 'public/uploads/' + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate(),
    filename(ctx, file, cb) {
        const filenameArr = file.originalname.split('.')
        cb(null, Date.now() + '.' + filenameArr[filenameArr.length - 1])
    },
})

//文件上传限制
const limits = {
    fields: 10, //非文件字段的数量
    fileSize: 2 * 1024 * 1024, //文件大小 单位 M
    files: 1, //文件数量
}

const upload = multer({ storage, limits })

/**
 * @swagger
 * /upload/uploadfile:
 *   post:
 *     summary: 单文件上传
 *     tags:
 *      - upload
 *     parameters:
 *       - name: file
 *         description: 上传文件
 *         required: true
 *         in: formData
 *         type: file
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
router.post('/uploadfile', upload.single('file'), async ctx => {
    try {
        const uploadUrl = `http://${ctx.request.header.host}/`
        const url = uploadUrl + ctx.request.file.path
        ctx.body = {
            code: 200,
            data: url.replace(/\\/g, '/').replace(/public\//, ''),
        }
    } catch (error) {
        ctx.body = {
            code: 400,
            msg: '上传失败',
        }
    }
})

module.exports = router
