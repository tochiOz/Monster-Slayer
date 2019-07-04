<template>
  <div class="posts-page">
    <PostList 
      :posts = "loadedPosts"
      class="pb-3" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/postList'

export default {
  components: {
    PostList
  },

  layout: 'blog' ,
  
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
