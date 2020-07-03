// pages/tar_other/tar_other.js
Page({
  data: {
     
  },
//跳转到日历页面
  toDate(e){
    wx.reLaunch({
      url: '../date_html/date_html'
    })    
  }  
})