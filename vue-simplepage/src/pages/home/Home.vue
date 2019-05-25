<template>
  <div class="home">
    <home-header />
    <home-swiper />
    <home-icons />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  export default {
    name: 'home',
    components: {
      HomeIcons,
      HomeHeader,
      HomeSwiper
    }
  }
</script>
