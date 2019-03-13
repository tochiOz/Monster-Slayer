<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/postList'
import AppButton from '@/components/UI/appButton'
import axios from 'axios'

export default {
  components: {
    PostList,
    AppButton
  },

  middleware: ['check-auth','auth'],

  layout: 'blog',

  //  asyncData(context) {
  //     return axios.get('https://nuxt-training-79a71.firebaseio.com/posts/' + context.params.id + '.json')
  //     .then(res => {
  //       return {
  //         loadedPost: res.data
  //       }
  //     })
  //     .catch(e => context.error(e))
  // }

  computed:{
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

