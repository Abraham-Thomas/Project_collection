<template>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true,
        delay: 1000
      },
      swiperList: [{
        id: '01',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/EB/11/EB1DD30DD42BC6757B7EAC255083FB11.png'
      }, {
        id: '02',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/14/96/14DF631E72D31D37AE2BF09BD0D4A096.png'
      }, {
        id: '03',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/5A/2E/5A670979454468E4854A43A6A4D8A12E.png'
      }, {
        id: '04',
        imgUrl: 'https://sxsimg.xiaoyuanzhao.com/80/AC/80DBEFC058FA5B6520C08EC3A96522AC.png'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 40%
    background: #eee
    .swiper-img
      width: 100%
</style>
