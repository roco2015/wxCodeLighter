const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async (event, context) => {
  try {
    const res = await db.collection('code').doc(event.id).get()
    return {
      code: 0,
      message: 'success',
      data: res.data
    }
  } catch (err) {
    return {
      code: 10100,
      message: 'false'
    };
  }
}
