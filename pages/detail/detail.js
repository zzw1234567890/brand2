// pages/detail/detail.js
var that;
var countDown_time;
var index;
var collect;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sview2: true,
    sview3: false,
    answer: false,
    answer2: true,
    mask: true,
    showview: true,
    collection: false,
    showvote: '已投票',
    searchValue: '',
    hhh: 10,
    mmm: 12,
    sss: 14,
    gold: 0,
    num: 0,
    pepole: 0,
    types: '',
    now: '',
    pic: '../../img/header.jpg',
    questions: '',
    username: '',
    img: '../../img/sc2.png',
    title: '收藏',
    vote: [
      {
        "name": "CHANEL 香奈儿",
        "id": '01',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222"
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '02',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222"
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '03',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222"
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '04',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222"
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '05',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222"
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '06',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222"
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '07',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222"
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '08',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222"
      },

    ],
    Brands: [
      { "pic": "../../img/header.jpg", "name": "小米sadsds" },
      { "pic": "../../img/header.jpg", "name": "小米sads" },
      { "pic": "../../img/header.jpg", "name": "小米adasdas" },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    // console.log(options)
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/need/details',
      method: 'POST',
      data: {
        need_id: options.id,
        userid: wx.getStorageSync('userid'),
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        console.log(e.data)
        that.setData({
          gold: e.data.gold,
          num: e.data.num,
          pepole: e.data.pepole,
          questions: e.data.questions,
          username: e.data.username,
          pic: e.data.pic,
          now: e.data.now,
          hhh: e.data.h,
          mmm: e.data.i,
          sss: e.data.s,
          time:e.data.time,
          types: e.data.types,
          vote: e.data.options,
          Brands: e.data.options
        })
        countDown_time = that.data.hhh + ':' + that.data.mmm + ':' + that.data.sss;
        that.count_down(countDown_time)
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

  },
  // 倒计时
  count_down: function (countDown_time) {
    var that = this;
    var time = countDown_time.split(':')
    var hhh = parseInt(time[0])
    var mmm = parseInt(time[1])
    var sss = parseInt(time[2])
    this.setData({
      sss: (sss < 10) ? '0' + sss : sss,
      mmm: (mmm < 10) ? '0' + mmm : mmm,
      hhh: (hhh < 10) ? '0' + hhh : hhh
    })
    var Interval = setInterval(function () {
      if (sss > 0) {
        sss--
      } else {
        // console.log('时间到')
        clearInterval(Interval)
      }
      if (sss == 0) {
        if (mmm > 0) {
          mmm--
          sss = 59;
        }
        if (mmm == 0 && hhh > 0) {
          hhh--
          sss = 59;
          mmm = 59;
        }
      }
      that.setData({
        sss: (sss < 10) ? '0' + sss : sss,
        mmm: (mmm < 10) ? '0' + mmm : mmm,
        hhh: (hhh < 10) ? '0' + hhh : hhh
      })
    }, 1000)
  },
  sc: function () {
    that = this;
    if (that.data.title == "收藏") {
      that.setData({
        img: '../../img/sc.png',
        title: '已收藏'
      })
    }
    else {
      that.setData({
        img: '../../img/sc2.png',
        title: '收藏'
      })
    }
  },
  aware: function () {
    wx.navigateTo({
      url: '../rule/rule',
    })
  },
  friend: function () {
    wx.navigateTo({
      url: '../rank/rank',
    })
  },
  //查看回答
  answer: function () {
    that = this;
    if (that.data.answer == false) {
      that.setData({
        sview2: false,
        sview3: true,
        answer: true,
        answer2: false,
      })
    }
    else {
      that.setData({
        sview3: false,
        sview2: true,
        answer2: true,
        answer: false,
      })
    }
  },
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
  },

  submit: function (e) {
    that = this;
    // console.log(that.data.searchValue)
    if (that.data.searchValue == '') {
      wx.showModal({
        title: '提示',
        content: '您输入的内容为空',
      })
    } else {
      wx.request({
        url: 'https://go.zhangzw.top/brand2/web/user/reply',
        method: 'POST',
        data: {
          userid: wx.getStorageSync('userid'),
          optionid: e.currentTarget.dataset.id,
          content: that.data.searchValue
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (e) {
          // console.log(e.data);
        }
      })
    }
  },
  reset: function (e) {
    that = this;
    that.setData({ searchValue: '' })
  },
  look: function (e) {
    wx.navigateTo({
      url: '../rank/rank?id=' + e.currentTarget.dataset.id,
    })
  },
  touch: function () {
    that = this;
    if (that.data.showview == false) {
      // console.log('a')
      that.setData({
        showview: true,
        mask: true,
      })
    }
    else {
      that.setData({
        showview: false,
        mask: false,
      })
    }
  },
  showHide(e) {
    // console.log(e.currentTarget.dataset.changeid)
    var vote = this.data.vote;
    for (var i = 0; i < vote.length; i++) {
      if (e.currentTarget.dataset.changeid == vote[i].id) {
        var printPrice = "vote[" + i + "].shows";
        if (this.data.vote[i].shows) {
          this.setData({
            [printPrice]: false
          });
        } else {
          this.setData({
            [printPrice]: true
          });
        }
      } else {
        var printPrice1 = "vote[" + i + "].shows";
        this.setData({
          [printPrice1]: false
        });
      }
    }
  },
  toCollect: function (e) {
    // console.log(that.data.vote[index].id)
    that = this;
    index = e.currentTarget.dataset.index;
    if (that.data.vote[index].isvote == 1) {
      collect = true
    } else {
      collect = false
    }
    that.showModal();
  },
  showModal: function (e) {
    var that = this;
    // console.log(that.data.vote[index].vote)
    wx.showModal({
      title: '提示',
      content: "您确定要投票吗？",
      showCancel: true,
      // cancelText: "取消111",
      // cancelColor: "#000",
      confirmText: collect ? "取消投票" : "投票",
      confirmColor: "#166fb4",
      success: function (res) {
        //确定投票
        if (res.confirm) {
          wx.request({
            url: 'https://go.zhangzw.top/brand2/web/option/vote',
            method: 'POST',
            data: {
              user_id: wx.getStorageSync("userid"),
              option_id: that.data.vote[index].id
            },
            header: {
              "content-type": "application/x-www-form-urlencoded"
            },
            success: function (e) {
            }
          })
        }
      }
    })
  },
})