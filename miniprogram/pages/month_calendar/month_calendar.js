Page({
  data: {
    year: 0,
    month: 0,
    date: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    isToday: 0,
    isTodayWeek: false,
    todayIndex: 0,

    dateArr_change:[
      "date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head","date-head"
    ],
   /*  dateTextArr:[
      {id:1,content:"今天是1号"},
      {id:2,content:"今天是2号"},
      {id:3,content:"今天是3号"},
      {id:4,content:"今天是4号"},
      {id:5,content:"今天是5号"},
      {id:6,content:"今天是6号"},
      {id:7,content:"今天是7号"},
      {id:8,content:"今天是8号"},
      {id:9,content:"今天是9号"},
      {id:10,content:"今天是10号"},
      {id:11,content:"今天是11号"},
      {id:12,content:"今天是12号"},
      {id:13,content:"今天是13号"},
      {id:14,content:"今天是14号"},
      {id:15,content:"今天是15号"},
      {id:16,content:"今天是16号"},
      {id:17,content:"今天是17号"},
      {id:18,content:"今天是18号"},
      {id:19,content:"今天是19号"},
      {id:20,content:"今天是20号"},
      {id:21,content:"今天是21号"},
      {id:22,content:"今天是22号"},
      {id:23,content:"今天是23号"},
      {id:24,content:"今天是24号"},
      {id:25,content:"今天是25号"},
      {id:26,content:"今天是26号"},
      {id:27,content:"今天27号"},
      {id:28,content:"今天是28号"},
      {id:29,content:"今天是29号"},
      {id:30,content:"今天是30号"},
      {id:31,content:"今天是31号"},
    ], */
    //dateTextArr:[],
    dateTextContent:"aaaa",
    date_index:0,
  },
  onLoad: function () {
    let that=this;
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    this.dateInit();
    this.setData({
      year: year,
      month: month,
      isToday: '' + year + month + now.getDate()
    });
    //var dateTextContent=this.data.dateTextContent
    wx.cloud.database().collection('dateTextArr').get({
      success(res){
        console.log("取数据成功",res.data[1].content)
        that.setData({
          dateTextArr:res.data,
          //dateTextContent:res.data[1].content
        })
      }
    })

  },
  dateInit: function (setYear, setMonth) {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let dateArr = [];                        //需要遍历的日历数组数据
    let arrLen = 0;                            //dateArr的数组长度
    let now = setYear ? new Date(setYear, setMonth) : new Date();
    let year = setYear || now.getFullYear();
    let nextYear = 0;
    let month = setMonth || now.getMonth();                    //没有+1方便后面计算当月总天数
    let nextMonth = (month + 1) > 11 ? 1 : (month + 1);
    let startWeek = new Date(year + ',' + (month + 1) + ',' + 1).getDay();                            //目标月1号对应的星期
    let dayNums = new Date(year, nextMonth, 0).getDate();                //获取目标月有多少天
    let obj = {};
    let num = 0;

    if (month + 1 > 11) {
      nextYear = year + 1;
      dayNums = new Date(nextYear, nextMonth, 0).getDate();
    }
    arrLen = startWeek + dayNums;
    for (let i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        num = i - startWeek + 1;
        obj = {
          isToday: '' + year + (month + 1) + num,
          dateNum: num,
          weight: 5
        }
      } else {
        obj = {};
      }
      dateArr[i] = obj;
    }
    this.setData({
      dateArr: dateArr
    })

    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowWeek = nowDate.getDay();
    let getYear = setYear || nowYear;
    let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;

    if (nowYear == getYear && nowMonth == getMonth) {
      this.setData({
        isTodayWeek: true,
        todayIndex: nowWeek
      })
    } else {
      this.setData({
        isTodayWeek: false,
        todayIndex: -1
      })
    }
  },
  lastMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
    let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },
  nextMonth: function () {
    //全部时间的月份都是按0~11基准，显示月份才+1
    let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
    let month = this.data.month > 11 ? 0 : this.data.month;
    this.setData({
      year: year,
      month: (month + 1)
    })
    this.dateInit(year, month);
  },


  changeDate(e){
    console.log(e.currentTarget.id)
    var dateArr_change=this.data.dateArr_change
    //var dateTextArr = dateTextArr
    //var dateTextContent = this.data.dateTextContent
    var date_index=this.data.date_index
    for(var i=0;i<31;i++){
      dateArr_change[i]="date-head"
    }
    //console.log("需要的内容",dateTextArr[1].content)
    dateArr_change[e.currentTarget.id]="date-head-choose",
    //dateTextContent=dateTextArr[e.currentTarget.id-1].content
    this.setData({
      dateArr_change:dateArr_change,
      //dateTextContent:dateTextContent
      date_index:e.currentTarget.id
    })
  }
})