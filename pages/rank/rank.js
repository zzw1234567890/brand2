// pages/rank/rank.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    common: [
      { "pic": "../../img/header.jpg", "from": "小扣啊.", "create_time": "2018-5-7 6:23:44", "money": "3", "content": "双方的互动上发挥第三方绝对是福建省即使双方技术技术积分is附件四" },
      { "pic": "../../img/header.jpg", "from": "小扣啊.", "create_time": "2018-5-7 6:23:44", "money": "3", "content": "双方的互动上发挥第三方绝对是福建省即使双方技术技术积分is附件四" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
    // console.log(options.id);
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/need/discuss',
      method: 'POST',
      data: {
        'option_id':options.id,
        key1: wx.getStorageSync('key1'),
        key1: wx.getStorageSync('realKey'),
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        // console.log(e.data)
        that.setData({
          common: e.data
        })
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