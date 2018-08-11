// pages/purchase/purchase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myRelease: [
      {
        "topic": '',
        "underway": '',
        "keyword1": '',
        "releaseDate": '',
        'browse': '',
        'answer': '',
        'goldcoin': '',
        'questionid': '',
        'deleteid': '',
      },
    ],
    statue: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  myAttend: function () {
    wx.redirectTo({
      url: '../attend/attend',
    })
  },
  myRelease: function () {
    wx.redirectTo({
      url: '../release/release',
    })
  },
  myPurchase: function () {
    wx.redirectTo({
      url: '../purchase/purchase',
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/user/getbuyneed', //仅为示例，并非真实的接口地址
      data: {
        last: 0,
        userid: wx.getStorageSync('userid'),
        key1: wx.getStorageSync('key1'),
        key1: wx.getStorageSync('realKey'),
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        var data1 = [];
        for (var i = 0; i < res.data.length; i++) {
          data1.push({
            "topic": res.data[i].questions,
            "underway": res.data[i].end,
            "keyword1": res.data[i].types,
            "releaseDate": res.data[i].time,
            'browse': res.data[i].view,
            'answer': res.data[i].people,
            'goldcoin': res.data[i].gold,
            'questionid': res.data[i].id,
            'deleteid': res.data[i].vu_id
          })
        }
        that.setData({
          myRelease: data1,
          statue: false
        })
      }
    });
  },
  delete: function (e) {
    var that = this;
    var myRelease = that.data.myRelease;
    // var id = e.currentTarget.dataset.id;
    var deleteid = e.currentTarget.dataset.deleteid;
    console.log(deleteid);
    var index = e.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          // myRelease.splice(index, 1);
          wx.request({
            url: 'https://go.zhangzw.top/brand2/web/user/delbuyneed',
            data: {
              id: deleteid,
              userid: wx.getStorageSync('userid'),
              key1: wx.getStorageSync('key1'),
              key1: wx.getStorageSync('realKey'),
            },
            method: "POST",
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: function (res) {
              console.log(res.data)
              if (res.data == 1) {
                myRelease.splice(index, 1)
                console.log(myRelease);
                that.setData({
                  myRelease: myRelease
                });
              }
            }
          })

        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
      }
    })
  },
  getdetails: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id,
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
    var that = this;
    var first = that.data.myRelease;
    // console.log(first);
    var lastid = that.data.myRelease[that.data.myRelease.length - 1].questionid
    // console.log(lastid);

    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/user/getbuyneed', //仅为示例，并非真实的接口地址
      data: {
        last: lastid,
        userid: wx.getStorageSync('userid'),
        key1: wx.getStorageSync('key1'),
        key1: wx.getStorageSync('realKey'),
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        // console.log(res.data);
        // first = first.concat(res.data);
        // console.log(first);
        var data2 = [];
        for (var j = 0; j < res.data.length; j++) {
          data2.push({
            "topic": res.data[j].questions,
            "underway": res.data[j].end,
            "keyword1": res.data[j].types,
            "releaseDate": res.data[j].time,
            'browse': res.data[j].view,
            'answer': res.data[j].people,
            'goldcoin': res.data[j].gold,
            'questionid': res.data[j].id,
            'deleteid': res.data[j].vu_id
          })
        };
        // console.log(data2);
        first = first.concat(data2);
        console.log(first);
        that.setData({
          myRelease: first,
          statue: false,
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})