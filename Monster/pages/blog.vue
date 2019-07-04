<template>
  <div>
    <b-jumbotron class="shadow drop" header="Building Blog with Nuxt Routing Communication" lead="A Game built with vue.js, by which each feature/round of the web page move according to clicks and gives a log of the information" >
      <p>Get the latest tech news!!!!!</p>
      <b-btn variant="info" href="/postBlog">See More</b-btn>
    </b-jumbotron>

    <div >
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <PostList :posts =  "loadedPosts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/Posts/postList'

export default {
  components: {
    PostList
  },

  layout: 'blog',

  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }

}
</script>

<style scoped>
  .drop {
    background-image: url(https://avante.biz/wp-content/uploads/White-Wallpaper-Hd/White-Wallpaper-Hd-034.jpg);
  
  }
</style>

