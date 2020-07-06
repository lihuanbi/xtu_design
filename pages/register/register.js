// pages/register/register.js
Page({
  data:{
    nickname:'',
    number:'',
    password:''
  },
  //获取昵称
  getNickname(event){
   // console.log("获取昵称",event)
    this.setData({
      nickname:event.detail.value
    })
  },
  //获取用户学号
  getNum(event){
    //console.log("获取输入的学号",event)
    this.setData({
      number:event.detail.value
    })
  },
  //获取用户密码
  getPsw(event){
    //console.log("获取输入的密码",event)
    this.setData({
      password:event.detail.value
    })
  },
  //注册
  zhuce(){
    let nickname=this.data.nickname
    let number=this.data.number
    let password=this.data.password
    //console.log("点击了注册",nickname,number,password)
    //校验学号长度
    if(number.length!=12){
      wx.showToast({
        icon:'none',
        title: '学号长度有误',
      })
      return
    }
  
    //校验密码长度最少为6位
    if(password.length<6){
      wx.showToast({
        icon:'none',
        title: '密码至少为6位',
      })
      return
    }
    //判断是否存在已有用户
    wx.cloud.database().collection('users').where({
      number:this.data.number
    }).get().then(res=>{
      console.log(res.data)//打印返回结果
      if(res.data.length!=0){
        wx.showToast({
          title: '该用户已存在',
        })
        return 
      }else{
//注册功能的实现
wx.cloud.database().collection('users').add({
  data:{
    nickname:nickname,
    number:number,
    password:password
  },
  success(res){
   //console.log('注册成功',res)
   wx.showToast({
     title:'注册成功',
   })
   wx.navigateTo({
     url: '/pages/login/login',  //注册成功后跳转到登录页
   })
  },
  fail(res){
    console.log('注册失败',res)
  }
})
      }
     
  }) 
  }
})