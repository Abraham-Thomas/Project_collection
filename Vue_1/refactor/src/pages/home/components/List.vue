<template>
    <div>
      <div class="space"></div>
      <ul>
        <li class="list border-bottom" v-for="item of InfoList" :key="item.id">
          <img class="list-img" :src="item.imgUrl">
          <div>
            <div class="list-info-content">
              <p class="list-title">{{item.title}}</p>
              <p class="list-company">{{item.company}}</p>
              <div class="list-address">{{item.address}}</div>
            </div>
            <div class="list-info-price">
              <div class="list-date">{{item.date}}</div>
              <div class="list-cash">￥{{item.price}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeList',
  data () {
    return {
      InfoList: [{
        id: '001',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/66/30/66496B0224080A2B02AAB1B871E17D30.png',
        title: '销售运营资料员',
        company: '中兴之星',
        address: '昆明',
        date: '3-11',
        price: '100-200/天'
      }, {
        id: '002',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/76/62/76295C394993A66353496F4EC3EB7962.png',
        title: '考研教师',
        company: '新东方',
        address: '杭州',
        date: '3-13',
        price: '150-200/天'
      }, {
        id: '003',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/CC/18/CCDAE27CBE3C154E46624B722C61F718.png',
        title: '信息审核实习生',
        company: '梦想科技',
        address: '成都',
        date: '3-11',
        price: '80-160/天'
      }, {
        id: '004',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/F4/C6/F48D8A7523227624FA4D18B32A53D9C6.jpg',
        title: 'HR Intern',
        company: 'APM',
        address: '重庆',
        date: '3-15',
        price: '160-220/天'
      }, {
        id: '005',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/1A/85/1AAC6508A337582C2EEDEE0708B8B385.jpg',
        title: '行政助理',
        company: '再担保',
        address: '北京',
        date: '3-15',
        price: '160-300/天'
      }, {
        id: '006',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/45/AC/450B8CE26AB7EAD497648E2C00AA94AC.png',
        title: 'PPT设计师',
        company: '旁门文化',
        address: '郑州',
        date: '3-16',
        price: '90-170/天'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~../../../assets/styles/mixins.styl"
  .space
    padding: .1rem
    background: #eee
  .list
    display: flex
    height: 25%
    .list-img
      width: 1.8rem
      height: 1.6rem
      padding: .1rem
    .list-info-content
      flex: 1
      width: 3rem
      margin-top:.2rem
      margin-left: .2rem
      min-width: 0
      .list-title
        margin-bottom: .2rem
        font-size: .32rem
        ellipsis()
      .list-company
        margin-bottom: .2rem
        color: #aaa
      .list-address
        color: #aaa
        font-size: .28rem
    .list-info-price
      margin: -1rem -1.6rem auto 2rem
      padding-left: 1.8rem
      float: right
      width: 2rem
      .list-date
        margin-bottom: .2rem
        color: #aaa
      .list-cash
        margin-left: -.6rem
        font-size: .32rem
        color: red
</style>
