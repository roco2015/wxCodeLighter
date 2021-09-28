const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext();
    const res = await db.collection('code').where({
      _openid: wxContext.OPENID,
    }).get()
    return {
      code: 0,
      message: 'success',
      data: {
        list: res.data
      }
    }
  } catch (err) {
    return {
      code: 10100,
      message: 'false'
    };
  }
}
