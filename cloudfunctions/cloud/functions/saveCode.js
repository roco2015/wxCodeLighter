const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext();
    await db.collection('code').add({
      data: {
        _openid: wxContext.OPENID,
        code: event.code,
        title: event.title
      }
    });
    return {
      code: 0,
      message: 'success'
    };
  } catch (err) {
    return {
      code: 10200,
      message: 'false'
    };
  }
}
