// pages/goldcoin/goldcoin.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    balance:'0'
  },
  record: function () {
    wx.navigateTo({
      url: '../record/record',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/user/getuser',
      method: 'POST',
      data: {
        userid: wx.getStorageSync('userid'),
        key1: wx.getStorageSync('key1'),
        key1: wx.getStorageSync('realKey'),
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        that.setData({ gold: e.data.gold })
        //  console.log(e.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/user/getuser',
      data: {
        userid: wx.getStorageSync('userid')
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          balance: res.data.gold
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})