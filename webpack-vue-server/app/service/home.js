"use strict";

const Service = require('egg').Service;

class HomeSevice extends Service{
	async getTodayAD(){
		const {app} = this;
		let result = await app.mysql.query(`select tName,tImg from todayad`);
		return result;
	}

	async getHomeArticle(){
		const {app} = this;
		let result = await app.mysql.query(`select aName,aContent,aLike,aRead,aComment,username,imgUrl from article a,users u where a.userId=u.userId limit 7`);
		return result;
	}
}

module.exports = HomeSevice;