<template>
  <div>
    <div class="container">
      <div class="row">
        <b-card 
          class="col-md-12 col-sm-12 col-xs-12 mb-5 shadow px-0"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 100%">
          <b-card-header class="text-center">
            <img :src="loadedPost.thumbnail" 
              alt="Better Show"
              class="image-responsive mb-5"
              style="max-width: 100%; height: 400px;">
            <h1 class="text-center">{{ loadedPost.title }}</h1>
            <hr>
          </b-card-header>
          <p class="text-center text-danger mb-12"><em>{{ loadedPost.updatedDate | date }}/ Written By: {{ loadedPost.author }}</em></p>
          <div class="row">
            <h6><Strong class="text-center mt-2 text-secondary mx-5">{{ loadedPost.previewText }}</Strong></h6>
          </div>
          <div class="container my-4 mx-5">
            <p class="post-content">{{ loadedPost.content }}</p>
          </div>
        </b-card>
      </div>
    
      <section class="post-feedback text-center">
        <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
      </section> 
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  layout: 'blog',

  asyncData(context) {
    return axios.get('https://nuxt-training-79a71.firebaseio.com/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  }
}
</script>

