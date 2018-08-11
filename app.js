//app.js

App({
  onLaunch: function () {
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/index/getsecret',
      data: {},    
      header: { 'content-type': 'application/json' },
      success: function (e) {
        // console.log(e.data)
        wx.setStorageSync('key1', e.data.key)
        wx.setStorageSync('key2', e.data.key)
        String.prototype.Right = function (i) {
          return this.slice(this.length - i, this.length);
        };
        var key = wx.getStorageSync('key2');
        var ring = key.substring(0, key.length - (e.data.secret-10));
        var realKey = key.Right(e.data.secret-10) + ring;
        // console.log(realKey)
        wx.setStorageSync('realKey', realKey)
      }
    })
    wx.login({
      success: function (e) {
        wx.request({
          url: 'https://go.zhangzw.top/brand2/web/user/login',
          data: {
            code: e.code,
            key1:wx.getStorageSync('key1'),
            key1: wx.getStorageSync('realKey'),
          },
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
          header: { "content-type": "application/x-www-form-urlencoded" },
          success: function (e) {
            wx.setStorageSync('userid', e.data)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})