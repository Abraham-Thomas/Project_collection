<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
      <div class="header-right">{{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    color: #fff;
    background: $bgColor
    .header-left
      width: .64rem
      float: left
      .back-icon
        padding-left: .2rem
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      color: #ccc
      background: #fff
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -.04rem
        font-size: .3rem
</style>
