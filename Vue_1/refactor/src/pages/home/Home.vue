<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-list></home-list>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeList from './components/List'
export default {
  name: 'Header',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeList
  }
}
</script>

<style scoped>

</style>
