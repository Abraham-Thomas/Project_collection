//index.js
//获取应用实例
const app = getApp()

Page({
  data: { 
    imgUrls:[
      'https://i8.mifile.cn/v1/a1/94696d56-baae-9397-a79c-c157c70f0347!720x360.webp',
      'https://i8.mifile.cn/v1/a1/8f0d9d4c-6261-7431-addb-f95a48d0a1ad!720x360.webp',
      'https://i8.mifile.cn/v1/a1/e6fbd905-b149-5ae4-82b6-6632c4e95167!720x360.webp'
    ],
    navBar:[
      {img:'https://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b!144x152.webp', name:'新品发布'},
      {img:'https://i8.mifile.cn/v1/a1/c49fb77f-b5e0-8336-17aa-9ded56ef184c!144x152.webp',name:'小米众筹'},
      {img:'https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee!144x152.webp',name:'以旧换新'},
      {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c94c523eb03128378ef2dc17c2c2cf0a.png?thumb=1&w=144&h=152',name:'一分拼团'},
      {img:'https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp',name:'超值特卖'},
    ],
    navBarSecond:[
      {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152',name:'小米秒杀'},
      {img:'https://i8.mifile.cn/v1/a1/d5e3c742-3145-dd47-f665-331bef273a54!144x152.webp',name:'每日甄选'},
      {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152',name:'电视热卖'},
      {img:'https://i8.mifile.cn/v1/a1/d7058e48-c115-e651-b33c-04ce071ae9e6!144x152.webp',name:'家电热卖'},
      {img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152',name:'米粉卡'},
    ],
    recommand:[
      {
        // https://m.mi.com/commodity/detail/7861
        id:'1',
        name:'米兔招财猫足金吊坠	',
        img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4ceb8e65e128cc6b22a95eb06b3a65d3.jpg',
        brief:'招财送礼 / 足金材质 / 3D硬金工艺 / 永久珍藏',
        price:'￥888'
      },
      {
        // https://m.mi.com/commodity/detail/8106
        id:'2',
        img:'https://i8.mifile.cn/v1/a1/e6ad4862-10d6-3a9a-2a8d-cf2e24fd4378!344x280.webp',
        name:'飞利浦智睿床头灯',
        brief:'无极旋转调光调色，多种动态氛围光，接入米家智能场景，贴心的手机阅读模式',
        price:'￥299'
      },
      {
        // https://m.mi.com/commodity/detail/4374
        id:'3',
        name:'8H标准乳胶枕 Z1',
        brief:'泰国天然乳胶 / 德国物理防螨内枕套 / 高回弹舒适支撑 / 自然贴合头颈 / 小巧礼盒包装',
        price:'￥159',
        img:'https://i8.mifile.cn/b2c-mimall-media/3a097c818e3e2a91affc2355ad67d5f9.jpg?w=516&h=420',
      },
      {
        // https://m.mi.com/commodity/detail/3488
        id:'4',
        img:'https://i8.mifile.cn/v1/a1/64bd3118-e101-8bcf-f963-9c657909c81a.webp',
        name:'米家压力IH电饭煲',
        brief:'压力IH加热技术 / 灰铸铁粉体涂层内胆 / 智能烹饪 / 3L容量',
        price:'￥699'
        
      }
    ],
    like:[
           {
            //  https://m.mi.com/commodity/detail/4348
              id: "5",
              url: "https://i8.mifile.cn/v1/a1/7e206c06-260d-592a-3253-84c3f597a7bf.jpg",
              name: "米家扫地机器人",
              brief: "智商高，扫得干净扫得快",
              price: "1699元",
              oldPrice: "",
              is_new: false,
              hasDiscount: false,
              discountUrl: ""
           },
           {
              id: "6",
              url: "//i8.mifile.cn/v1/a1/71160d24-f582-9174-923c-3eac73ad6fd7!360x360.webp",
              name: "小米净水器（厨下式）",
              brief: "400加仑大流量，隐藏安装",
              price: "1999元",
              oldPrice: "",
              is_new: false,
              hasDiscount: false,
              discountUrl: ""
           },
           {
              id: "7",
              url: "//i8.mifile.cn/v1/a1/360d4fc7-9424-b65d-3fb7-097748f5dff8!360x360.webp",
              name: "米兔儿童电话手表",
              brief: "带你探索植物园的智能电话手表",
              price: "599元",
              oldPrice: "",
              is_new: true,
              hasDiscount: false,
              discountUrl: ""
           },
           {
              id: "8",
              url: "//i8.mifile.cn/v1/a1/d13a97db-6382-e102-c13a-adfea93d167f!360x360.webp",
              name: "米连卡随身路由器套装",
              brief: "随时随地 无线上网",
              price: "599",
              oldPrice: "948",
              is_new: true,
              hasDiscount: false,
              discountUrl: ""
           }
    ],

    interval:3000,
   duration:800,
   heigh:""
  },
  imageLoad: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px";　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
       heigh: swiperH,       //设置高度
    })
 },

 toSearch:function(){
  //  console.log(e);
  wx.navigateTo({
    
    url:"./searching/searching"
 })
 },
//  商品页面传出的id
 toShop:function(e){
  let that = this 
   console.log(e)
   const index = e.currentTarget.dataset.index
  //  const id = e.currentTarget.dataset.id
   wx.navigateTo({
     url:'../goodsDetails/goodsDetails?id='+ that.data.recommand[index].id
   })
 }

})