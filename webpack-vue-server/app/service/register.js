/* eslint-disable brace-style */
/* eslint-disable prefer-const */
/* eslint-disable eol-last */
/* eslint-disable eqeqeq */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
/* eslint-disable indent */
'use strict';

const Service = require('egg').Service;

class RegisterService extends Service {
    async index(formData) {
        const { app } = this;
        console.log(formData);
        let sql = `SELECT * FROM users where username="${formData.username}" `
        let results = await app.mysql.query(sql);
        if (results.length > 0) {
            return { code: -1, Msg: '账号已存在' }
        } else {
            let result = await app.mysql.insert('users', { username: formData.username, password: formData.password, tel: formData.tel })
            return { code: 1, Msg: '注册成功' }
        }
    }
}

module.exports = RegisterService;