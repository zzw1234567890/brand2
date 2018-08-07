//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function (e) {
        wx.request({
          url: 'https://go.zhangzw.top/brand2/web/user/login',
          data: {
            code: e.code
          },
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
          header: { "content-type": "application/x-www-form-urlencoded" },
          success: function (e) {
            // console.log(e.data);
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