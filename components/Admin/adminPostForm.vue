<template>
  <div class="home-page">
    <b-jumbotron class="container" header="Create A Blog" >
      <form 
        class="flex justify-center align-items-center form-group" 
        >
        <AppControlInput 
          v-model="editedPost.author"><h3>Author Name:</h3></AppControlInput>
        <AppControlInput 
          v-model="editedPost.title"><h3>Title:</h3></AppControlInput>
        <AppControlInput 
          v-model="editedPost.thumbnail"><h3>Thumbnail Link:</h3></AppControlInput>
        <AppControlInput 
          v-model="editedPost.content"
          control-type="textarea"><h3>Content</h3></AppControlInput>
        <AppControlInput 
          v-model="editedPost.previewText"
          control-type="textarea"><h3>Preview Text</h3></AppControlInput>
          <AppButton 
            type="submit" 
            class="btn btn-success"
            @click.prevent="savePost">Save </AppButton>
        <AppButton
          type="button"
          class="ml-20 btn btn-md"
          btn-style="cancel"
          @click.prevent="cancelForm">Cancel</AppButton>
      </form>
    </b-jumbotron>
  </div>
</template>


<script>
import AppControlInput from '~/components/UI/appControlInput'
import AppButton from '~/components/UI/appButton'
export default {
  components: {
    AppControlInput,
    AppButton
  },

  props: {
    post: {
      type: Object,
      required: false
    }
  },

  data () {//make sure to check for the spread operator, to check if any props is loaded to the component through the double binding

    return {
      editedPost: this.post ? 
      { ...this.post } :
      {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        previewText: ''
      }
    }
  },

  methods: {
    savePost() {
      return this.$emit('submit', this.editedPost)
    },

    cancelForm() {
      return this.$router.push('/admin')
    }
  }
}
</script>

