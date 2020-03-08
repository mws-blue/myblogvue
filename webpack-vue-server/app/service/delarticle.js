/* eslint-disable eol-last */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
/* eslint-disable indent */
'use strict';

const Service = require('egg').Service;

class DelarticleService extends Service {
    async index(aId) {
        const { app } = this;
        let result = await app.mysql.delete('article', { aId: aId });
        return result;
    }

}

module.exports = DelarticleService;