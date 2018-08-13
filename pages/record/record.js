// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records:[
      {
        types : '签到奖励',
        date : '2018-02-31 23:23:21',
        count : '+21',
      }
    ],
    statue:true,
    color:''
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
    var that = this;
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/user/getlog', //仅为示例，并非真实的接口地址
      data: {
        userid: wx.getStorageSync('userid'),
      },
      method:"POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var data3 = [];
        for(var i = 0;i<res.data.length;i++){
          data3.push({
            "types": res.data[i].des,
            "date": res.data[i].time,
            "count": res.data[i].gold
          });
        }
        // var records = that.data.records;
        that.setData({
          records: data3,
          statue: false,
        });
        // for (var i = 0; i < res.data.length; i++) {
        //   if(res.data[i].gold.charAt(0)=='-'){
        //     console.log(res.data[i].gold.charAt(0))
        //     that.setData({
        //       color: 'green'
        //     })
        //   }
        //   else {
        //     // console.log(res.data[i].gold.charAt(0))
        //     // that.setData({
        //     //   color : 'red'
        //     // })
            
        //   }
        //   break;
        // }
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