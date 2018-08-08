// pages/send/send.js

var searchValue = ''
var max = 20;

Page({


  /**
   * 页面的初始数据
   */
  data: {
    all: '',
    inputclass: 'num',
    items: [{
        value: '美国'
      },
      {
        value: '中国'
      },
      {
        value: '巴西'
      },
      {
        value: '日本'
      },
      {
        value: '英国'
      },
      {
        value: '法国'
      },
      {
        value: '巴西'
      },
      {
        value: '日本'
      },
      {
        value: '英国'
      },
      {
        value: '法国'
      },
    ],

    searchValue: '',
    view: true,
    none: true,
    brand: [],
    type_id: 0,
    description:'',
    money: '',
    date:'1',
    top: false,
  },


  /**
   * 生命周期函数--监听页面加载
   */

  checkboxChange: function(e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      brand: e.detail.value,
    })

  },

  //问题有效期
  listenerSlider: function(e) {
    //获取滑动后的值
    // console.log(e.detail.value);
    this.setData({
      date: e.detail.value,
    })
  },

  // 是否公开
  switch1Change: function(e) {

    this.setData({
      top: e.detail.value,
    })
  },

  //输入
  searchValueInput: function(e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
    // console.log(e.detail.value)
  },

  //输入后显示品牌
  suo: function(e) {
    var that = this;
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/option/index',
      method: 'POST',
      data: {
        type: that.data.searchValue,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(e) {
        // console.log(e.data)
        if (that.data.searchValue == 0 || e.data.type_id == '') {
          that.setData({
            none: true,
            view: false,
          });
        } else {
          // console.log(e)
          that.setData({
            view: true,
            none: false,
            items: e.data.brands,
            type_id: e.data.type_id
          });
        }
      },
      complete: function(e) {

        wx.showToast({

          title: '正在查询中',
          icon: 'loading',
          duration: 500,

        })
      },
      fail: function(e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    });
  },

  // 赏金数额判断
  inputmoney: function(e) {
    if (e.detail.value > max) {
      this.setData({
        inputclass: 'error'
      });
    } else {
      this.setData({
        inputclass: 'num'
      });
    }
  },


  // 表单提交
  formSubmit: function(e) {

    var that = this

    //判断
    if (e.detail.value.type == "" || e.detail.value.description == "" || e.detail.value.money == "" || that.data.brand == "") {

      wx.showToast({

        title: '请填写完整信息',

        image: '/img/del.png',

        duration: 1500

      })
    } else if (e.detail.value.money > max) {

      wx.showToast({

        title: '金币不足',

        image: '/img/del.png',

        duration: 1500

      })

    } else {

      var top;
      if (e.detail.value.top) {
        top = 1;
      } else {
        top = 0;
      }
      wx.request({
        url: 'https://go.zhangzw.top/brand2/web/need/publish',
        data: {
          user_id: wx.getStorageSync("userid"),
          type_id: that.data.type_id,
          content: e.detail.value.description,
          over_time: e.detail.value.date,
          gold: e.detail.value.money,
          show: top,
          options: that.data.brand,
        },
        method: 'POST',
        header: { // 设置请求的 header  
          'content-type': 'application/x-www-form-urlencoded',

        },
        success: function(res) {
          console.log(res.data);
          wx.showToast({
            title: '已发布',
            icon: 'success',
            duration: 1500,
          })

            that.setData({
            searchValue:'',
              description:'',
              money:'',
              date: '1',
              top:false,
              view: true,
              none: true,
            });
          wx.switchTab({
            url: '../index/index'
          })
          return;        
        },
        fail: function(res) {}
      })
    }
  },
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})