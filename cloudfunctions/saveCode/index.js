// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext();
    console.log(event)
    await db.collection('code').add({
      data: {
        _openid: wxContext.OPENID,
        code: event.code
      }
    });
    return {
      code: 0,
      message: 'success'
    };
  } catch (err) {
    return {
      code: -1,
      message: 'false'
    };
  }
}
