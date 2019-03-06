import axios from 'axios'

export const state = () => ({
    loadedPosts: []

})

export const mutations = {
    setPosts(state, posts) {
    
        state.loadedPosts = posts
    },

    addPost(state, post) {
      state.loadedPosts.push(post)
    },

    editPost(state, editedPost) {
      const postIndex = state.loadedPosts.find(post => 
        post.id === editedPost.id
      )
      state.loadedPosts[postIndex] = editedPost
    }
}


export const actions = {//spread operator is used to pull out al data in an object, edit the object and pass back.
  //it gives access to every value in the object.
    nuxtServerInit({commit}) {
        return axios.get('https://nuxt-training-79a71.firebaseio.com/posts.json')
        .then(res => {
          const postsArray = []
          for (const key in res.data) {
            postsArray.push({ ...res.data[key], id: key })
          }
          commit('setPosts', postsArray)
        })
        .catch()
    },

    addPost ({commit}, postData) {
      let createdPost = {
        ...postData,
        updatedDate: new Date()
      }
        return axios
          .post('https://nuxt-training-79a71.firebaseio.com/posts.json', createdPost)
          .then((res) => {
            commit('addPost', { ...createdPost, id: res.data.name })
          })
          .catch(e => console.log(e))
    },
   

    editPost({commit}, editedPost) {
      axios.put('https://nuxt-training-79a71.firebaseio.com/posts/' + 
      editedPost.id + '.json', editedPost)
      .then(() => {
        commit('editPost', editedPost)
      })
      .catch(e => console.log(e))

    }
}

export const getters = {
    loadedPosts: state => state.loadedPosts
}