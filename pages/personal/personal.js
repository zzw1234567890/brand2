//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // hiddex:false,
    userInfo: {
      avatarUrl: "",//用户头像  
      nickName: "",//用户昵称  
    },
  },

  goldcoin: function () {
    wx.navigateTo({
      url: '../goldcoin/goldcoin',
    })
  },
  help: function () {
    wx.navigateTo({
      url: '../help/help',
    })
  },
  release: function () {
    wx.navigateTo({
      url: '../release/release',
    })
  },
  attend: function () {
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
    var that = this;
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.getUserInfo({
      success: function (res) {
        // console.log(res)
        that.setData({
          hasUserInfo: true
        })
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        });
        wx.request({
          url: 'https://go.zhangzw.top/brand2/web/user/setuser',
          method: "POST",
          header: { "content-type": "application/x-www-form-urlencoded" },
          data: {
            img: res.userInfo.avatarUrl,
            name: res.userInfo.nickName,
            userid: wx.getStorageSync("userid")
          },
          success: function (e) {
          }
        })
      },
      fail: function () {
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: '../../img/header.jpg',
          [nickName]: '未命名',
        })
      }
    })
  },

  getUserInfo: function (e) {
    var that = this;
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    that.setData({
      hasUserInfo: true,
      userInfo: e.detail.userInfo,
    })
    wx.setStorageSync('avatar', e.detail.userInfo.avatarUrl)
    wx.setStorageSync('nickname', e.detail.userInfo.nickName)
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