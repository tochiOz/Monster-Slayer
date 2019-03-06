<template>
  <div>
    <AdminPostForm @submit="onSubmitData" />
  </div>
</template>

<script>

import axios from 'axios'
import AdminPostForm from '~/components/Admin/adminPostForm'
export default {
  components: {
    AdminPostForm
  },

  layout: 'blog'  ,

  methods: {
    async onSubmitData(postData) {
      await this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}

</script>
