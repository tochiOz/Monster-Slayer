<template>
  <div class="admin-post-page">
   
      <AdminPostForm :post="loadedPost" />
   
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/adminPostForm'

export default {
  
  components: {
    AdminPostForm
  },

  layout: 'blog'  ,
  
  data() {
    return {
      loadedPost: {
        author: 'Maximilian',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
      }
    }
  }
}
</script>


