/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/Login', controller.login.index);
    router.post('/register', controller.register.index);
    //获取博客专家
    router.get("/getProfession",controller.blog.getProfession);

    //获取技术区用户提问
    router.get("/getTeQuestion",controller.platform.getTeQuestion);

    //获取生活区用户提问
    router.get("/getNoTeQuestion",controller.platform.getNoTeQuestion);

    //获取榜单
    router.get("/getList",controller.platform.getList);

    //存文章
    router.post("/pushArticle",controller.wangEditor.pushArticle);
};