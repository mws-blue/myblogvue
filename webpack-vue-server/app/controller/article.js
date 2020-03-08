"use strict";

const Cotroller = require("egg").Controller;

class ArticleController extends Cotroller{
	async getArticle(){
		const {ctx,service} = this;
		let userId = ctx.query.userId;
		let result = await service.article.getArticle(userId);
		ctx.body = result;
	}
}

module.exports = ArticleController;