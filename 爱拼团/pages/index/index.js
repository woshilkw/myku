
Page({
  // 页面的初始数据
  data: {
    swiper_list:[],
    catItems:[],
    floorData:[],
    // 个人信息
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e){
    this.getSwiper();
    this.getCatItems();
    this.getFloorData();
  },

  getFloorData: function(){
    let floorData = {
      "message": [{
        "floor_title": {
          "name": "时尚服装",
        },
        "product_list": [{
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor1.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor2.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor3.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor4.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor5.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }, {
          "name": "服饰",
          "image_src": "http://www.linweiqin.cn/img/floor6.jpg",
          "open_type": "navigate",
          "navigator_url": "/pages/goodsList/index?query=服饰"
        }]
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
    console.log(this)
    this.setData({
      floorData: floorData.message
    })
  },

  getCatItems: function(){
    let catItems = {
      "message": [{
        "title": "分类",
        "image": "http://www.linweiqin.cn/img/cat1.png"
      },
      {
        "title": "秒杀拍",
        "image": "http://www.linweiqin.cn/img/cat2.png"
      },
      {
        "title": "超市购",
        "image": "http://www.linweiqin.cn/img/cat3.png"
      },
      {
        "title": "母婴品",
        "image": "http://www.linweiqin.cn/img/cat4.png"
      },{
        "title": "易充值",
        "image": "http://www.linweiqin.cn/img/cat5.png"
      },]
    }
    this.setData({
      catItems: catItems.message
    })
  },

  getSwiper: function(){
    let swiper_list = {
      "message": [{
        "image": "http://www.linweiqin.cn/img/banner1.jpg",
        "id": 1
      },{
        "image": "http://www.linweiqin.cn/img/banner2.jpg",
        "id": 2
      },{
        "image": "http://www.linweiqin.cn/img/banner3.jpg",
        "id": 3
      }],
      "meta": {
        "msg": "获取成功",
        "status": 200
      }
    }
    this.setData({
      swiper_list: swiper_list.message
    })
  }
})
