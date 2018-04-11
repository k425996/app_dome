// pages/erweima/erweima.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasHidden: true,     //设置画板的显示与隐藏，画板不隐藏会影响页面正常显示
    avatarUrl: '',         //用户头像
    nickName: '',          //用户昵称
    wxappName: app.globalData.wxappName,    //小程序名称
    shareImgPath: '',
    screenWidth: '',       //设备屏幕宽度
    description: app.globalData.description,    //奖品描述
    FilePath: '',           //头像路径
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var userInfo, nickName, avatarUrl
    //获取用户信息，头像，昵称之类的数据
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        userInfo = res.userInfo
        nickName = userInfo.nickName
        avatarUrl = userInfo.avatarUrl
        that.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
        })
        wx.downloadFile({
          url: res.userInfo.avatarUrl,
          success(res){
            console.log(res)
            that.setData({
              FilePath: res.tempFilePath
            })
          }
        })
      }
    })
    //获取用户设备信息，屏幕宽度
    wx.getSystemInfo({
      success: res => {
        that.setData({
          screenWidth: res.screenWidth
        })
        console.log(that.data.screenWidth)
      }
    })
  },
  //定义的保存图片方法
  saveImageToPhotosAlbum:function () {
    // wx.showLoading({
    //   title: '保存中...',
    // })
    var that = this;
    //设置画板显示，才能开始绘图
    that.setData({
      canvasHidden: false
    })
    var unit = that.data.screenWidth / 375
    var path1 = "../images/bg.jpg"
    var avatarUrl = that.data.avatarUrl
    var FilePath = that.data.FilePath
    console.log(FilePath + "头像")
    var path2 = "../images/mcode.png"
    var path3 = "../images/0.jpg"
    var path4 = "../images/code.png"
    var unlight = "../images/code.png"
    var nickName = that.data.nickName
    console.log(nickName + "昵称")
    var context = wx.createCanvasContext('share')
    var description = that.data.description
    var wxappName = "来「 " + that.data.wxappName + " 」试试运气"
    context.drawImage(path1, 0, 0, unit * 375, unit * 462.5)
   // context.drawImage(path4, unit * 164, unit * 40, unit * 50, unit * 50)   
    context.setFillStyle('#000')
    context.setFontSize("15")
    context.setTextAlign('center')
    context.fillText("凉生大萨达撒见客户看", 187.5 * unit,  103* unit);
    context.setFontSize(14)
    context.setFillStyle("#000")
    context.setTextAlign('left')
    context.fillText("长按识别小程序", unit * 90, unit * 408)
    context.fillText(wxappName, unit * 90, unit * 428)    
    context.setLineWidth(2)
    context.setStrokeStyle('#ffffff')
    context.save() 
    context.arc(187 * unit, 48 * unit, 38 * unit, 0, 2 * Math.PI)
    context.clip(); //裁剪上面的圆形    
    context.drawImage(path3, 150 * unit, 10 * unit, 75 * unit, 75 * unit)    
    //context.drawImage(FilePath, unit * 48, unit * 120, unit * 181, unit * 178)
    context.restore()  
    context.closePath()   
    context.stroke()
    // context.save() 
    // context.arc(187 * unit, 350 * unit, 50* unit, 0, 2 * Math.PI)
    // context.clip();
    context.drawImage(path2, unit * 137, unit * 280, unit * 100, unit * 100) 
    //context.restore()
    //context.drawImage(path3, unit * 20, unit * 385, unit * 55, unit * 55)    
    //把画板内容绘制成图片，并回调 画板图片路径
    context.draw(false, function () {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: unit * 375,
        height: unit * 462.5,
        destWidth: unit * 375,
        destHeight: unit * 462.5,
        canvasId: 'share',
        success: function (res) {
          that.setData({
            shareImgPath: res.tempFilePath
          })
          if (!res.tempFilePath) {
            wx.showModal({
              title: '提示',
              content: '图片绘制中，请稍后重试',
              showCancel: false
            })
          }
          console.log(that.data.shareImgPath)
          //画板路径保存成功后，调用方法吧图片保存到用户相册
          // wx.saveImageToPhotosAlbum({
          //   filePath: res.tempFilePath,
          //   //保存成功失败之后，都要隐藏画板，否则影响界面显示。
          //   success: (res) => {
          //     console.log(res)
          //     wx.hideLoading()
          //     that.setData({
          //       canvasHidden: true
          //     })
          //   },
          //   fail: (err) => {
          //     console.log(err)
          //     wx.hideLoading()
          //     that.setData({
          //       canvasHidden: true
          //     })
          //   }
          // })
        }
      })
    });
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
    this.saveImageToPhotosAlbum()
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
    wx.startPullDownRefresh({
      success(res){
        console.log(res)
      }
    })
    wx.stopPullDownRefresh()
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