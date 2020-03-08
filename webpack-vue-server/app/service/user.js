/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async index(formData) {
        const { app } = this;
        let uname = formData;
        let result = await app.mysql.get('users', { username: uname });
        return result;

    }
    async inpuimg(uname, url) {
        const { app } = this;
        const row = {
            imgUrl: url
        };

        const options = {
            where: {
                username: uname
            }
        };
        const result = await this.app.mysql.update('users', row, options);
        const results = await this.app.mysql.get('users', { username: uname });
        return results;

    }
}

module.exports = UserService;