// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    code: '',
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleInputTitle(e) {
    this.setData({
      title: e.detail.value
    })
  },

  handleInputCode(e) {
    this.setData({
      code: e.detail.value
    })
  },

  handleSubmit() {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'cloud',
      data: {
        function: 'saveCode',
        code: this.data.code,
        title: this.data.title
      }
    }).then((resp) => {
      wx.hideLoading();
    }).catch((e) => {
      console.log(e);
      wx.hideLoading();
    });
  }
})