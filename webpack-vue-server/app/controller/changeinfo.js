/* eslint-disable prefer-const */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class ChangeinfoController extends Controller {
    async index() {
        const { ctx, service } = this;
        const formData = ctx.request.body;
        let result = await service.changeinfo.index(formData);
        console.log(formData);
        ctx.body = {
            code: 1,
            data: result,
        };
    }

}

module.exports = ChangeinfoController;