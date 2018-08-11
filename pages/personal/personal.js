//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
 
  goldcoin:function(){
    wx.navigateTo({
      url: '../goldcoin/goldcoin',
    })
  },
  help:function(){
    wx.navigateTo({
      url:'../help/help',
    })
  },
  release:function(){
    wx.navigateTo({
      url: '../release/release',
    })
  },
  attend:function(){
    wx.navigateTo({
      url: '../attend/attend',
    })
  },
  purchase: function () {
    wx.navigateTo({
      url: '../purchase/purchase',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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