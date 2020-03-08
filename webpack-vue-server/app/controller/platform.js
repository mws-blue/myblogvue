'use strict';

const Controller = require('egg').Controller;

class PlarformController extends Controller{
	async getTeQuestion(){
		const {ctx,service} = this;
		let result = await service.platform.getTeQuestion();
		ctx.body = result;
	}

	async getNoTeQuestion(){
		const {ctx,service} = this;
		let result = await service.platform.getNoTeQuestion();
		ctx.body = result;
	}

	async getList(){
		const {ctx,service} = this;
		let result = await service.platform.getList();
		ctx.body = result;
	}
}

module.exports = PlarformController;