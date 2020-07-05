// pages/login/login.js
Page({
  data:{
    number:'',
    password:''
  },
  //获取用户输入的学号
  getNum(event){
    //console.log('学号',event.detail.value)
    this.setData({
      number:event.detail.value
    })
  },
  //获取用户输入的密码
  getPwd(event){
   // console.log('密码',event.detail.value)
    this.setData({
      password:event.detail.value
    })
  },
  //点击登录
  login(event){
    let number=this.data.number
    let password=this.data.password
    //console.log('账号',number,'密码',password)
    if(number.length!=12){
      wx.showToast({
        icon:'none',
        title: '学号长度有误',
      })
      return
    }
    wx.cloud.database().collection('users').where({
      number:number 
    }).get({
      success(res){
        //console.log("获取数据成功",res)
        let users=res.data[0]
        if(password==users.password){
          wx.showToast({
            title: '登录成功',
          })
          //console.log('登录成功')
          wx.switchTab({     //登录成功后跳转到首页
            url:'/pages/home/home'
          })
        }else{
          wx.showToast({
            icon:'none',
            title: '学号或密码错误',
          })
          console.log('密码错误')
        }
      },
      fail(res){
        console.log("获取数据失败",res)
      }
    })
  },

  //跳转注册页面
  register:function(){
    wx.navigateTo({			//以navigate进行跳转
      url: '/pages/register/register',			//跳转路径
    })
  }
})