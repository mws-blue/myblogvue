"use strict";

const Service = require("egg").Service;

class ArticleService extends Service{
	async getArticle(){
		const {app} = this;
		let result = await app.mysql.query(`select aName,aContent,username,imgUrl from article a,users u where a.userId=u.userId`);
		return result;
	}
}

module.exports = ArticleService;