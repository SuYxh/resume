// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    name:'杨鑫昊',
	sex:'男',
	age:'22',
	tel:18372635819,
    spell:'Yang Xinhao',
	job:'前端开发',
	exp:'1年实习经验',
	email:'y170088888@163.com',
	address:'北京大兴旧宫',
	skill:[
		{name:"Vue/小程序",percent:70},
		{name:"Webpack/SaSS",percent:60},
		{name:"HTML/CSS/JavaScript",percent:85},
		{name:"Node/Python",percent:60},
		{name:"Git",percent:70}
	],
	education:[
		{
			school:"湖北汽车工业学院",
			major:"电子信息科学与技术(本科)",
			year:"2016-2020",
			desc:"本专业培养掌握计算机软件基本理论知识，熟悉软件开发和管理技术、能够在计算机软件领域中从事软件设计、开发和管理的高级人才。"
		}
	],
	work:[
	      {
	        company: "中国电子技术标准化研究院",
	        job: "实习生",
	        year: "2019/07-2020/07",
	        desc: "参与了三部委网站检测及渗透支撑，主要负责web安全，扫描和检测常见的web应用漏洞，如SQL注入、XSS、CSRF等，对于以后的web开发，会主动的去从代码层面做一些防御；主持开发了年会小程序"
	      }
	    ],
		project:[
		      {
		        name:"基于WordPress的资讯类小程序",
		        desc:"该小程序主要用于博客，企业资讯发布等，拥有分享、转发、赞赏等功能"
		      },
		      {
		        name:"Vue+Node构建商城系统",
		        desc:"项目采用的技术栈: Vue+Node+MySQL。前端：用Vue-cli搭建，使用Vue全家桶+element-ui；后端：Node；数据库：MySQL"
		      }
		    ],
			introduction:"本人性格开朗、稳重、有活力，待人热情、真诚；对待工作认真负责，善于沟通、协调有较强的组织能力与团队精神；上进心强、勤于学习能不断提高自身的能力与综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，稳定地提高自己的工作能力，与企业同步发展。"
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
    // 获取屏幕的宽高
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })
    console.log(width,height)
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