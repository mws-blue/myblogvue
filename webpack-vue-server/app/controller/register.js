/* eslint-disable eol-last */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
    async index() {
        const { ctx, service } = this;
        let formData = ctx.request.body;
        let result = await service.register.index(formData);

        ctx.body = result;

    }
}

module.exports = RegisterController;