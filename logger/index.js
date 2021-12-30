const path = require('path')
const log4js = require('koa-log4')

log4js.configure({
    appenders: {
        access: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log', //生成文件的规则
            alwaysIncludePattern: true, // 文件名始终以日期区分
            encoding: 'utf-8',
            filename: path.join(__dirname, 'logs', 'access'), // 生成文件路径和文件名
        },
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            encoding: 'utf-8',
            filename: path.join(__dirname, 'logs', 'application'),
        },
        out: {
            type: 'console',
        },
    },
    categories: {
        default: { appenders: ['out'], level: 'info' },
        access: { appenders: ['access'], level: 'info' },
        application: { appenders: ['application'], level: 'WARN' },
    },
})

module.exports = {
    // 记录所有访问级别的日志
    accessLogger: () => log4js.koaLogger(log4js.getLogger('access')),
    // 记录所有应用级别的日志
    logger: log4js.getLogger('application'),
}
