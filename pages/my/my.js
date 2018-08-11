var app = getApp();
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //登陆获取code
    wx.login({
      success: function (res) {
        console.log(res.code)
        //获取openid
        that.getOpenId(res.code)

      }
    });

  },
  getOpenId: function (code) {
    var that = this;
    // wx.request({
    //   url: "https://api.weixin.qq.com/sns/jscode2session?appid=小程序appid&secret=小程序应用密钥&js_code=" + code + "&grant_type=authorization_code",
    //   data: {},
    //   method: 'GET',
    //   success: function (res) {
    //     that.generateOrder(res.data.openid)

    //   },
    //   fail: function () {
    //     // fail

    //   },
    //   complete: function () {

    //   }
    // })
  },
  /**生成商户订单 */
  generateOrder: function (openid) {
    var that = this
    //统一支付
    // wx.request({
    //   url: '后台路径',
    //   method: 'GET',
    //   data: {
    //     gfee: '商品价钱',
    //     gname: '商品名称',
    //     openId: openid
    //     // （商品价钱和商品名称根据自身需要是否传值, openid为必传）
    //   },
    //   success: function (res) {
    //     var pay = res.data
    //     //发起支付
    //     var timeStamp = pay[0].timeStamp;
    //     var packages = pay[0].package;
    //     var paySign = pay[0].paySign;
    //     var nonceStr = pay[0].nonceStr;
    //     var param = { "timeStamp": timeStamp, "package": packages, "paySign": paySign, "signType": "MD5", "nonceStr": nonceStr };
    //     that.pay(param)

    //   },
    // })
  },

  /* 支付  */
  pay: function (param) {
    console.log("支付")
    console.log(param)
    wx.requestPayment({
      timeStamp: param.timeStamp,
      nonceStr: param.nonceStr,
      package: param.package,
      signType: param.signType,
      paySign: param.paySign,
      success: function (res) {
        // success
        wx.navigateBack({
          delta: 1, // 回退前 delta(默认为1) 页面
          success: function (res) {
            wx.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 2000
            })

          },
          fail: function () {
            // fail


          },
          complete: function () {
            // complete

          }
        })

      },
      fail: function (res) {
        // fail

      },
      complete: function () {
        // complete

      }
    })

  }
})
