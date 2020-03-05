/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/* eslint-disable indent */
'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
    async login(username) {
        const { app } = this;
        console.log(username)
        let result = await app.mysql.get('users', { username })
        console.log(result)
        return result;
    }

}

module.exports = LoginService;