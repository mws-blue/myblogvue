'use strict';

const Service = require('egg').Service;

class PlatformService extends Service{
	async getTeQuestion(){
		const {app} = this;
		let sql = `select qType,qName,qReplyNum,qHot,u.username,u.imgUrl from users u inner join question q on cId=1 and u.userId = q.userId`
		let result = await app.mysql.query(sql);
		return result;
	}

	async getNoTeQuestion(){
		const {app} = this;
		let sql = `select qType,qName,qReplyNum,qHot,u.username,u.imgUrl from users u inner join question q on cId=2 and u.userId = q.userId`
		let result = await app.mysql.query(sql);
		return result;
	}

	async getList(){
		const {app} = this;
		let result = await app.mysql.select("users");
		return result;
	}
}

module.exports = PlatformService;