const getCode = require('./functions/getCode');
const saveCode = require('./functions/saveCode');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.function) {
    case 'getCode':
      return await getCode.main(event, context);
    case 'saveCode':
      return await saveCode.main(event, context);
    default:
      return {
        code: 404,
        message: 'false'
      }
  }
}
