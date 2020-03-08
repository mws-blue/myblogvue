'use strict';

const Service = require("egg").Service;

class BlogService extends Service{
	async getProfession(){
		const {app} = this;
		const result = await app.mysql.select('users',{
			where:{profession:0},
			columns:['username','imgUrl','ujob','info','uArticleNum']
		});
		return result;
	}
}

module.exports = BlogService;