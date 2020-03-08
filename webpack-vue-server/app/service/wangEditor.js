"use strict";

const Service = require('egg').Service;

class WangEditorService extends Service{
	async pushArticle(article){
		const {app} = this;
		let result = await app.mysql.insert("article",{aName:article.aName,aContent:article.aContent,userId:article.userId});
		return result;
	}
}

module.exports = WangEditorService;