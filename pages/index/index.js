//index.js
var that;
var index;
var index2;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sview: false,
    sview2: true,
    hover: "navTitle",
    hovers: "navTitle",
    page: 1,
    end:0,
    brand: [
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "进行中",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "进行中",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "进行中",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "进行中",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "进行中",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
    ],
    finish: [
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "已结束",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "已结束",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "已结束",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "已结束",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
      {
        "pic": "../../img/header.jpg",
        "username": "是小扣啊",
        "time": "2018-7-28",
        "now": "已结束",
        "questions": "如何用1500元买个好手机？想打游戏。",
        "num": "31",
        "people": "4",
        "money": "24",
        "country": "法国",
        "paioshu": "7223",
      },
    ],
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
    that = this;
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/need/get',
      method: 'POST',
      data: {
        end: 0,
        page: that.data.page
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        // console.log(e.data[0].id);
        that.setData({
          brand: e.data,
          hover: "hover",
          hovers: "navTitle",
        })
      }
    })
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/need/get',
      method: 'POST',
      data: {
        end: 1,
        page: 1
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        // console.log(e.data);
        that.setData({
          finish: e.data,
        })
      }
    })
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
  onPullDownRefresh() {
    that = this;
    console.log(that.data.end);
    if(that.data.end == 0){
      wx.showNavigationBarLoading() //在标题栏中显示加载
      that.data.page = 1;
      wx.request({
        url: 'https://go.zhangzw.top/brand2/web/need/get',
        method: 'POST',
        data: {
          end: that.data.end,
          page: that.data.page,
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (e) {
          // console.log(e.data);
          that.setData({
            brand: e.data,
            hover: "hover",
            hovers: "navTitle",
          })
        },
        complete: function (e) {
          wx.showLoading({
            title: '加载中',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 2000)
          wx.hideNavigationBarLoading() //完成停止加载
          // wx.stopPullDownRefresh() //停止下拉刷新
        }
      })
    }else{
      wx.request({
        url: 'https://go.zhangzw.top/brand2/web/need/get',
        method: 'POST',
        data: {
          end: 1,
          page: that.data.page,
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (e) {
          // console.log(e.data);
          that.setData({
            finish: e.data,
            hovers: "hover",
            hover: "navTitle",
          })
        },
        complete: function (e) {
          wx.showLoading({
            title: '加载中',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 2000)
          wx.hideNavigationBarLoading() //完成停止加载
          // wx.stopPullDownRefresh() //停止下拉刷新
        }
      })
    }
    // console.log('--------下拉刷新-------')
    
    // ////
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    that = this;
    // console.log('--------上拉加载-------')
    if(that.data.end == 0){
      wx.showNavigationBarLoading()
      that.data.page += 1;
      wx.request({
        url: 'https://go.zhangzw.top/brand2/web/need/get',
        method: 'POST',
        data: {
          end: 0,
          page: that.data.page,
          last: that.data.brand[that.data.brand.length - 1].id
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (e) {
          that.data.brand = that.data.brand.concat(e.data);
          // console.log(that.data.brand);
          // console.log(e.data);
          that.setData({
            brand: that.data.brand,
            hover: "hover",
            hovers: "navTitle",
          })
          // console.log(e.data.length);        
        },
        complete: function (e) {
          if (e.data.length == 0) {
            wx.showToast({
              title: '已经见底啦',
            })
            setTimeout(function () {
              wx.hideLoading()
            }, 2000)
          } else {
            wx.showLoading({
              title: '加载中',
            })
            setTimeout(function () {
              wx.hideLoading()
            }, 2000)
          }
          wx.hideNavigationBarLoading() //完成停止加载
          // wx.stopPullDownRefresh() //停止下拉刷新
        }
      })
    }else{
      wx.request({
        url: 'https://go.zhangzw.top/brand2/web/need/get',
        method: 'POST',
        data: {
          end: 1,
          page: that.data.page,
          last: that.data.finish[that.data.finish.length - 1].id
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (e) {
          // console.log(e.data)
          that.data.finish = that.data.finish.concat(e.data);
          // console.log(that.data.finish);
          that.setData({
            finish: that.data.finish,
            hovers: "hover",
            hover: "navTitle",
          })
          // console.log(e.data.length);
        },
        complete: function (e) {
          if (e.data.length == 0) {
            wx.showToast({
              title: '已经见底啦',
            })
            setTimeout(function () {
              wx.hideLoading()
            }, 2000)
          } else {
            wx.showLoading({
              title: '加载中',
            })
            setTimeout(function () {
              wx.hideLoading()
            }, 2000)
          }
          wx.hideNavigationBarLoading() //完成停止加载

        }
      })
    }
    
    //
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  touch: function (e) {
    that = this;
    that.setData({end:0});
    that.setData({
      sview: false,
      sview2: true,
      hover: "hover",
      hovers: "navTitle",
    })

  },
  touch2: function (e) {
    that = this;
    that.setData({end:1});
    that.setData({
      sview: true,
      sview2: false,
      hovers: "hover",
      hover: "navTitle",
    })
  },
  detail: function (e) {
    index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../detail/detail?id=' + that.data.brand[index].id,
    })
  },
  detail2: function (e) {
    index2 = e.currentTarget.dataset.index;
    // console.log(e)
    wx.navigateTo({
      url: '../detail/detail?id=' + that.data.finish[index2].id,
    })
  },
  search: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  searcher: function () {
    wx.navigateTo({
      url: '../searcher/searcher',
    })
  },
})