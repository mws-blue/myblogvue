/* eslint-disable comma-dangle */
/* eslint-disable comma-spacing */
/* eslint-disable key-spacing */
/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

const Service = require('egg').Service;

class ChangeinfoService extends Service {
    async index(formData) {
        const { app } = this;
        // eslint-disable-next-line object-curly-spacing
        const row = {
            truename: formData.truename,
            birth: formData.date,
            gender: formData.gender,
            company: formData.company,
            info: formData.desc,

        };

        const options = {
            where: {
                userId: formData.userId
            }
        };

        let result = await app.mysql.update('users', row, options)
        return result;
    }

}

module.exports = ChangeinfoService;