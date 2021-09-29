// pages/detail/detail.js
import Prism from 'prismjs';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    id: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
    })
    console.log('options')
    wx.cloud.callFunction({
      name: 'cloud',
      data: {
        function: 'getCodeById',
        id: options.id
      }
    }).then((res) => {
      if (res.result?.code === 0) {
        const code = Prism.highlight(res.result?.data?.code || '', Prism.languages.javascript, 'javascript');
        this.setData({code});
      }
    }).catch((e) => {});
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})