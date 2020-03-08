/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const { ctx, service } = this;
        const username = ctx.query.username;
        console.log(ctx.query);
        const result = await service.user.index(username);
        ctx.body = result;
    }

}

module.exports = UserController;