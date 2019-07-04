<template>
  <div class="admin-post-page">
   
      <AdminPostForm :post="loadedPost" @submit="onSubmit" />
   
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/adminPostForm'
import axios from 'axios'

export default {
  
  components: {
    AdminPostForm
  },

  middleware: ['check-auth','auth'],

  layout: 'blog',

  asyncData(context) {
  return axios.get(
      "https://nuxt-training-79a71.firebaseio.com/posts/" 
        + context.params.postId + ".json"
    )
    .then(res => {
      return {
        loadedPost: { ...res.data, id: context.params.postId }
      }
    })
    .catch(e => context.error(e))
  },

  methods: {
    async onSubmit( editedPost) {
      await this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>


