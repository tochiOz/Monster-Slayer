<template>
  <div class="app-container ">
    <Header/>

    <div class="app-content ">
      <nuxt/>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/templateBlog/header'
import Footer from '~/components/templateBlog/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
    html, body{
        font-family: 'Open-Sans', sans-serif;
        margin: 0;
        width: 100%;
    }
    .app-container{
        /* height: 80%; */
        position: relative;
        display: grid;
        grid-template: auto 1fr auto / 1fr;
    }
    .app-content{
        /* min-height: 80vh; */
        padding: 24px;
        display: grid;
    }
</style>