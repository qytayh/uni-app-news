'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	// const list = await db.collection('article').where({classify:event.name}).field({
	// 	content:false
	// }).get()
	const list = await db.collection('article')
	.aggregate()
	.match({
		classify:event.name
	})
	.project({
		content:false
	}).end()
	//返回数据给客户端
	return {
		code:200,
		data:list,
		msg:"数据请求成功"
	}
};
