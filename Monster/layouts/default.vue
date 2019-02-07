<template>
  <div class="app-container">
    <TheHeader/>

    <TheSideNav/>

    <div class="app-content">
      <nuxt/>
    </div>

    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheSideNav from '~/components/TheSideNav'
import TheFooter from '~/components/TheFooter'
export default {
  components: {
    TheHeader,
    TheSideNav,
    TheFooter
  }
}
</script>

<style>
    html, body{
        margin: 0;
        height: 100%;
        width: 100%;
    }
    .app-container{
        height: 90%;
        position: relative;
        display: grid;
        grid-template: auto 1fr auto / 1fr;
    }
    .app-content{
        min-height: 90vh;
        padding: 24px;
        display: grid;
    }
</style>