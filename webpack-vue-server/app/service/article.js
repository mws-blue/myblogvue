"use strict";

const Service = require("egg").Service;

class ArticleService extends Service{
	async getArticle(userId){
		const {app} = this;
		console.log(userId);
		let sql = `select aName,aContent,username,imgUrl from article a,users u where a.userId=${userId} and a.userId=u.userId`;
		let result = await app.mysql.query(sql);
		return result;
	}
}

module.exports = ArticleService;