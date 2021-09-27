// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleInput(e) {
    this.setData({
      code: e.detail.value
    })
  },

  handleSubmit() {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'saveCode',
      data: {
        code: this.data.code
      }
    }).then((resp) => {
      wx.hideLoading();
    }).catch((e) => {
      console.log(e);
      wx.hideLoading();
    });
  }
})