// pages/searcher/searcher.js
var searchValue = ''
var index;
var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    sview: true,
    none: true,
    view: false,
    array: [
      { "keyword": "口红", },
      { "keyword": "短裙", },
      { "keyword": "笔记本电脑", },
      { "keyword": "冰箱", },
      { "keyword": "笔记本电脑", },
      { "keyword": "真丝连衣裙", },
      { "keyword": "冰箱", },
      { "keyword": "笔记本电脑", },
      { "keyword": "真丝连衣裙", },
    ],

  },


  //输入
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
  },
  //搜索
  suo: function (e) {
    var that = this;
    wx.request({
      url: 'https://go.zhangzw.top/brand2/web/need/search',
      method: 'POST',
      data: {
        search: that.data.searchValue,
        end:1,
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (e) {
        if (that.data.searchValue == 0 || e.data == '') {
          that.setData({
            none: false,
            view: true,
            sview: true,
          });
        } else {
          // console.log(e.data)
          that.setData({
            none: true,
            view: true,
            sview: false,
            finish: e.data,
          });
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    });
  },

  //清空输入框
  clearInput: function () {
    this.setData({
      searchValue: ''
    })
  },

  //搜索热词
  hotSearch: function (e) {
    var that = this
    var text = e.target.dataset.text;
    that.setData({ searchValue: text })
    that.suo();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://go.zhangzw.top/brand1/web/search/hot',
      method: 'POST',
      data: {},
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        // console.log(e);
        that.setData({
          array: e.data
        })
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
  detail: function (e) {
    that = this;
    index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../detail/detail?id=' + that.data.brand[index].id,
    })
  },
})