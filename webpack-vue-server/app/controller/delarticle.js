/* eslint-disable key-spacing */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class DelarticleController extends Controller {
    async index() {
        const { ctx, service } = this;
        const formData = ctx.request.body.aId;
        let result = await service.delarticle.index(formData);
        console.log(result);
        ctx.body = {
            code: 1,
            data: "删除成功！",
        };
    }

}

module.exports = DelarticleController;