// pages/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item1: "rotateX90",
    isShow:true,
    isShowing:false,
    item1Style:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindCss(e){
    //{{item1Style=='item1Style'? '':'rotateX90'}} 
    if (this.data.isShow){
      var duration =100
      let item1 = wx.createAnimation({
        duration: duration,
        transformOrigin: '0 0 0'
      })
      let item2 = wx.createAnimation({
        duration: duration,
        transformOrigin: '0 0 0',
        delay:100
      })
      let item3 = wx.createAnimation({
        duration: duration,
        transformOrigin: '0 0 0',
        delay: 200
      })
      let item4 = wx.createAnimation({
        duration: duration,
        transformOrigin: '100% 0 0',
        delay:300
      })
      console.log()
      let item5= wx.createAnimation({
        duration: duration,
        transformOrigin: '0 0 0',
        delay:400
      })
      item1.rotateY(0).step()
      item2.rotateX(0).step()
      item3.rotateX(0).step()
      item4.rotateY(0).step()
      item5.rotateX(0).step()
      this.setData({
        item1: item1,
        item2:item2,
        item3: item3,
        item4: item4,
        item5: item5,
        isShow:false
      })
    }else{
      var duration = 100
      let item5 = wx.createAnimation({
        duration: duration,
        transformOrigin: '0,100%,0',
      })
      let item4 = wx.createAnimation({
        duration: duration,
        transformOrigin: '100% 0 0',
        delay:100
      })
      let item3 = wx.createAnimation({
        duration: duration,
        transformOrigin: '100% 0 0',
        delay: 200
      })
      let item2 = wx.createAnimation({
        duration: duration,
        transformOrigin: '0,100%,0',
        delay: 300
      })
      let item1 = wx.createAnimation({
        duration: duration,
        transformOrigin: '0 100% 0',
        delay: 400
      })
      item5.rotateX(90).step()
      item3.rotateX(90).step()
      item4.rotateY(90).step()
      item2.rotateY(90).step()
      item1.rotateX(90).step()
      this.setData({
        item5: item5,
        item4: item4,
        item3: item3,
        item2: item2,
        item1: item1,
        isShow:true
      })
    }
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