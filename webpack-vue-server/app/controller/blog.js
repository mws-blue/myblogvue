'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async getProfession() {
	const { ctx,service } = this;
	const result = await service.blog.getProfession();
    ctx.body = result;
  }
}

module.exports = BlogController;