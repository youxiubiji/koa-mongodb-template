# 介绍

[![koa](https://img.shields.io/badge/koa-2.13.4-lightgrey)](https://koa.bootcss.com/)
[![@koa/multer](https://img.shields.io/badge/%40koa%2Fmulter-3.0.0-orange)](https://github.com/koajs/multer)
[![koa-bodyparser](https://img.shields.io/badge/koa--bodyparser-4.3.0-orange)](https://github.com/koajs/bodyparser)
[![mongoose](https://img.shields.io/badge/mongoose-6.1.4-orange)](https://mongoosejs.com/)
[![koa2-swagger-ui](https://img.shields.io/badge/koa2--swagger--ui-5.3.0-green)](https://github.com/scttcper/koa2-swagger-ui)


> 自从 Node 逐渐兴起时，就一直想做一款后台框架，看了很多优秀的开源项目但是发现没有合适的，要不就是好久没有更新和维护了，于是利用空闲时间自己开始写一套后台框架，最终考虑到自己也是前端工程师的缘故，最终确定了使用 Koa 和 MongoDB 搭建。


- [使用文档](https://youxiubiji.github.io/koa-mongodb-template-site/)

## 功能

```md
-   登录 / 注册
-   路由 / 白名单
-   文件上传
-   日志
-   jwt 验证 / 加密
-   跨域
-   接口文档
-   数据库
-   静态资源
-   验证器
-   全局错误处理
```

## 准备

你需要本地安装 node 和 git

## 目录结构

本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```sh

├── bin                        # 构建文件
│   └── www                    # 执行命令
├── controller                 # 控制器
│   └── user.js                # 用户相关模块
├── db                         # 数据库
│   └── index.js               # 数据库配置文件
├── logger                     # 日志
│   └── index.js               # 日志配置文件
├── model                      # 模型
│   └── user.js                # 用户模型文件
├── public                     # 静态资源文件
├── routes                     # 路由
|   ├── upload.js              # 上传路由
│   └── user.js                # 用户路由
├── utils                      # 工具库
|   ├── config.js              # jwt配置文件
|   ├── swagger.js             # 接口文档配置文件
│   └── user.js                # 封装生成token文件
├── app.js                     # 入口文件
└── package.json               # package.json
```

## 安装

```sh
# clone the project
git clone https://github.com/youxiubiji/koa-mongodb-template.git

# enter the project directory
cd koa-mongodb-template

# install dependency
npm install

# develop
npm run dev
```

启动完成后会自动打开浏览器访问 [http://localhost:3000/swagger](http://localhost:3000/swagger)， 你看到下面的页面就代表操作成功了。

![](https://static.youxiubiji.com/uploads/2022017/1641549233891475.png)


## License

Copyright (c) 2021-present Youxiubiji

