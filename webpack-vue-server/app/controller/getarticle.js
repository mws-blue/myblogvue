/* eslint-disable no-unused-vars */
/* eslint-disable comma-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
'use strict';

const Controller = require('egg').Controller;

class GetarticleController extends Controller {
    async index() {
        const { ctx, service } = this;
        const userid = ctx.query.userId;
        console.log(userid);
        const result = await service.getarticle.index(userid);
        console.log(result);
        ctx.body = result;
    }
}

module.exports = GetarticleController;