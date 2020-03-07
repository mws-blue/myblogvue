"use strict";

const Controller = require("egg").Controller;

class WangEditorController extends Controller{
	async pushArticle(){
		const {ctx,service} = this;
		let article = ctx.request.body;
		let result = await service.wangEditor.pushArticle(article);
		ctx.body = result;
	}
}

module.exports = WangEditorController;