/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable prefer-const */
'use strict';

const Service = require('egg').Service;

class GetarticleService extends Service {
    async index(userid) {
        const { app } = this;
        let result = await app.mysql.select('article', { userId: userid });
        console.log(result);
        return result;

    }
}
module.exports = GetarticleService;