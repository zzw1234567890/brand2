// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height1:100,
    height2:100,
    height3: 100,
    height4: 100,
    height5: 100,
    height6: 100,
    height7: 100,
    height8: 100,
  },

  unfold1:function(e){
    var that = this;
    if(that.data.height1==100){
      this.setData({
        height1: 370,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      })
    }else{
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      })
    }


  },

  unfold2: function (e) {
    var that = this;
    if (that.data.height2 == 100){
      this.setData({
        height1: 100,
        height2: 250,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      });
    } else {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      })
    }

    
  },

  unfold3: function (e) {
    var that = this;
    if (that.data.height3 == 100) {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 250,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      });
    } else {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      })
    }
  },

  unfold4: function (e) {
    var that = this;
    if (that.data.height4 == 100) {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 250,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      });
    } else {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      })
    }

  },

  unfold5: function (e) {
    var that = this;
    if (that.data.height5 == 100) {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 200,
        height6: 100,
        height7: 100,
        height8: 100,
      });
    } else {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      })
    }
  },

  unfold6: function (e) {
    var that = this;
    if (that.data.height6 == 100) {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 250,
        height7: 100,
        height8: 100,
      });
    } else {
      this.setData({
        height1: 100,
        height2: 100,
        height3: 100,
        height4: 100,
        height5: 100,
        height6: 100,
        height7: 100,
        height8: 100,
      })
    }

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