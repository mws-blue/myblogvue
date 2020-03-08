'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getTodayAD(){
    const {ctx,service} = this;
    let result = await service.home.getTodayAD();
    ctx.body = result;
  }

  async getHomeArticle(){
    const {ctx,service} = this;
    let result = await service.home.getHomeArticle();
    ctx.body = result;
  }
}

module.exports = HomeController;
