'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	// const list = await db.collection('article').where({classify:event.name}).field({
	// 	content:false
	// }).get()
	let matchObj ={}
	if(event.name!=="全部"){
		matchObj={
			classify:event.name
		}
	}
	const list = await db.collection('article')
	.aggregate()
	.match(matchObj)
	.project({
		content:false
	})
	.skip(event.pageSize*(event.page-1))
	.limit(event.pageSize)
	.end()
	//返回数据给客户端
	return {
		code:200,
		data:list.data,
		msg:"数据请求成功"
	}
};
