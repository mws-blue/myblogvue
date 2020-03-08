/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable comma-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable object-curly-spacing */
/* eslint-disable quote-props */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
class UploadController extends Controller {
    async index() {
        // 接收客户端传递过来的图片
        const { ctx, service } = this;
        const dest = '/public/uploads/';
        const file = ctx.request.files[0];
        const username = ctx.request.body.upuser
            // 拷贝文件到指定的文件夹
        let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
        await fs.copyFileSync(file.filepath, to);
        fs.unlinkSync(file.filepath); //删除临时文件
        // 返回值应该是图片的访问路径
        // 返回图片路径  this.app.config  获取配置信息
        let cluster = this.app.config.cluster.listen;
        let url = `http://${cluster.hostname}:${cluster.port}${dest}${path.basename(file.filepath)}`
        console.log(url)
        let result = await service.user.inpuimg(username, url);
        // 客户端要求是json格式
        ctx.body = {
            code: 1,
            src: url,
            srl: result
        };
    }
}

module.exports = UploadController;