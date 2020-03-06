/* eslint-disable key-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable eol-last */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        const { ctx, service } = this;
        let formData = ctx.request.query;
        let result = await service.login.login(formData.username);
        let data = { code: 1, Msg: '登录成功', data: result };
        if (!result) {
            data = { code: -1, Msg: '账号不存在' };
        }
        //密码错误 
        if (result && formData.password != result.password) {

            data = { code: 0, Msg: '密码错误' };
        }
        ctx.body = data;
        //:数据库查询来的数据
    }
}

module.exports = LoginController;