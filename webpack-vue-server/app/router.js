/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/Login', controller.login.index); //用户登录
    router.post('/register', controller.register.index); //用户注册
    router.post('/upload/', controller.upload.index); //上传头像
    router.get('/user', controller.user.index); //获取用户所有信息
    router.post('/changeinfo', controller.changeinfo.index); //修改用户基本所有信息
    router.get('/getarticle', controller.getarticle.index); //获取用户文章所有信息
    router.post('/delarticle', controller.delarticle.index); //删除用户文章所有信息-
};