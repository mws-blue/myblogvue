"use strict";

const Cotroller = require("egg").Controller;

class ArticleController extends Cotroller{
	async getArticle(){
		const {ctx,service} = this;
		let result = await service.article.getArticle();
		ctx.body = result;
	}
}

module.exports = ArticleController;