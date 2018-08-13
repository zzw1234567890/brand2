// pages/detail/detail.js
var that;
var countDown_time;
var index;
var collect;
var arrSrc = [];
var printPrice;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    user_id:'',
    use_option:'',
    sename:'采纳',
    sview2: true,
    sview3: false,
    toupai: false,
    sview:true,
    // cai: true,
    hui: false,
    tou: false,
    zhuangtai: 'zhuangtai',
    mask: true,
    showview: true,
    ing: false,
    done: true,
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
    questions: '',
    username: '',
    is_vote: 0,
    id: '',
    vote: [
      {
        "name": "CHANEL 香奈儿",
        "id": '01',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222",
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '02',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222",
        "is_vote": 0,
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '03',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222",
        "is_vote": 0,
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '04',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222",
        "is_vote": 0,
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '05',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222",
        "is_vote": 0,
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '06',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222",
        "is_vote": 0,
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '07',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222",
        "is_vote": 0,
      },
      {
        "name": "CHANEL 香奈儿",
        "id": '08',
        "contents": '发猜数包的人设置问题和答案，只有提交的答案和出题答案一致才可以得到红包',
        "shows": false,
        "vote": "2222",
        "is_vote": 0,
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
    that.setData({ id: options.id })
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/need/details',
      method: 'POST',
      data: {
        need_id: options.id,
        user_id: wx.getStorageSync('userid'),
        key1: wx.getStorageSync('key1'),
        key1: wx.getStorageSync('realKey'),
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        // console.log(e.data)
        if (!e.data.h && !e.data.i && !e.data.s) {
          that.setData({
            gold: e.data.gold,
            num: e.data.num,
            pepole: e.data.pepole,
            questions: e.data.questions,
            username: e.data.username,
            pic: e.data.pic,
            now: e.data.now,
            time: e.data.time,
            types: e.data.types,
            vote: e.data.options,
            Brands: e.data.options,
            is_vote: e.data.is_vote,
            ing: true,
            done: false,
            zhuangtai: 'zhuangtai2',
            sview2: false,
            sview3: true,
            hui: true,
            tou: false,
            toupai: false,
            // cai: false,
            user_id: e.data.user_id,
            use_option: e.data.use_option,
          })
        } else {
          // console.log('sss')
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
            time: e.data.time,
            types: e.data.types,
            vote: e.data.options,
            Brands: e.data.options,
            is_vote: e.data.is_vote,
            zhuangtai: 'zhuangtai',
            sview3: false,
            sview2: true,
            hui: false,
            tou: true,
            toupai: false,
            // cai: true,
            user_id: e.data.user_id,
            use_option: e.data.use_option,
          })
          countDown_time = that.data.hhh + ':' + that.data.mmm + ':' + that.data.sss;
          that.count_down(countDown_time)
        }
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
  onShareAppMessage: function (e) {
    that = this;
    if (that.data.now == '已结束') {
      if (e.from != "menu") {
        return {
          title: "快来帮帮我~",
          // imageUrl: '../../img/logo.jpg',
          path: "/pages/detail/detail?id=" + that.data.id,
        }
      } else {
        return {
          title: "品牌 Top",
          // imageUrl: '../../img/logo.jpg',
          path: "/pages/index/index",
        }
      }
    } else {
      if (e.from != "menu") {
        return {
          title: "快来帮帮我~",
          // imageUrl: '../../img/logo.jpg',
          path: "/pages/detail/detail?id=" + that.data.id,
        }
      } else {
        return {
          title: "品牌 Top",
          // imageUrl: '../../img/logo.jpg',
          path: "/pages/index/index",
        }
      }
    }

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
        console.log('时间到')
        clearInterval(Interval)
        that.setData({
          ing: true,
          done: false,
        })
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
    if (that.data.toupai == false) {
      wx.showModal({
        title: '活动进行中...',
        content: '现在还不能查看~',
        confirmColor: "#FF521A"
      })
    }
    else {
      that.setData({
        sview2: false,
        sview:true,
      })
    }
  },
  tuopiao: function () {
    wx.showModal({
      title: '活动已结束',
      content: '现在不能投票啦~~',
      confirmColor: "#FF521A"
    })
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
        confirmColor: "#FF521A"
      })
    } else {
      wx.request({
        url: 'https://go.zhangzw.top/brand2/web/user/reply',
        method: 'POST',
        data: {
          userid: wx.getStorageSync('userid'),
          optionid: e.currentTarget.dataset.id,
          content: that.data.searchValue,
          key1: wx.getStorageSync('key1'),
          key1: wx.getStorageSync('realKey'),
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (e) {
          wx.showToast({
            title: '发布成功',
          })
          setTimeout(function () {
            that.setData({
              [printPrice]: false,
              searchValue: '',
            })
          }, 2000)
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
        printPrice = "vote[" + i + "].shows";
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
    that = this;
    index = e.currentTarget.dataset.index;
    // console.log(that.data.user_id)
    if (that.data.user_id == wx.getStorageSync("userid")){
      wx.showModal({
        title: '提示',
        content: "您是题主，不能投票哦~",
        confirmColor: "#FF521A"
      })
    }
    else{
      if (that.data.is_vote == 1) {
        collect = true
      } else {
        collect = false
        that.showModal();
      }
      return;
    }
  },
  showModal: function (e) {
    var that = this;
    // console.log(that.data.vote[index].vote)
    wx.showModal({
      title: '提示',
      content: "您确定要给它投票吗？",
      showCancel: true,
      confirmText: collect ? "取消投票" : "投票",
      confirmColor: "#FF521A",
      success: function (res) {
        //确定投票
        if (res.confirm) {
          wx.request({
            url: 'https://go.zhangzw.top/brand2/web/option/vote',
            method: 'POST',
            data: {
              user_id: wx.getStorageSync("userid"),
              option_id: that.data.vote[index].id,
              need_id: that.data.id,
              key1: wx.getStorageSync('key1'),
              key1: wx.getStorageSync('realKey'),
            },
            header: {
              "content-type": "application/x-www-form-urlencoded"
            },
            success: function (e) {
              // console.log(e.data)
              if (e.data > 0) {
                that.data.vote[e.data].vote += 1;
                that.setData({ is_vote: e.data,vote:that.data.vote })
              }
            }
          })
        }
      }
    })
  },
  //预览图片
  previewImg: function (e) {
    that = this;
    var index = e.currentTarget.dataset.index;
    var Pic = that.data.vote;
    for (var a = 0; a < Pic.length; a++) {
      var temp = Pic[a].img;
      arrSrc.push(temp)
    }
    // console.log(arrSrc)
    wx.previewImage({
      current: Pic[index].img, //当前图片地址
      urls: arrSrc, //所有要预览的图片的地址集合 数组形式
    });
    // console.log(Pic[index].pic);
  },
  CaiNa:function(e){
    var Index = e.currentTarget.dataset.index;
    that=this;
    if (that.data.user_id == wx.getStorageSync("userid")){
      wx.request({
        url: 'https://go.zhangzw.top/brand2/web/option/use',
        method: 'POST',
        data: {
          option_id: that.data.vote[Index].id,
          key1: wx.getStorageSync('key1'),
          key1: wx.getStorageSync('realKey'),
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function (e) {
          // console.log('l')
          that.setData({
            use_option:e.data.option_id
          })
        }
      })
    }
    else{
      wx.showModal({
        title: '提示',
        content: '您不是题主，不能采纳~',
        confirmColor: "#FF521A"
      })
    }
  }
})