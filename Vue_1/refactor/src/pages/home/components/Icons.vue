<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="icon-img" >
        <img class="icon-img-content" :src="item.imgUrl"
             alt="短期实习僧招聘"/>
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '01',
        desc: '短期实习',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon1.png?v=003490370e820aa04da4456274752651'
      }, {
        id: '02',
        desc: '转正机会',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon2.png?v=c8d8540ecd03c8612fbd345253f7158a'
      }, {
        id: '03',
        desc: '一周三天',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon3.png?v=0c3f223e76f64e5ec4796609890f587a'
      }, {
        id: '04',
        desc: '日薪200',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon4.png?v=80621aa6ef0a03e91a9c25f331f6f26b'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    overflow: hidden
    width: 100%
    margin-top: 4%
    height: 0
    padding-bottom: 25%
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      box-sizing: border-box
      padding: .1rem
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .5rem
        .icon-img-content
          display: block
          margin: 0 auto
          width: 60%
          height: 70%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: -10%
        text-align: center
</style>
