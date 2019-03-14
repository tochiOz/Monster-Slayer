import Cookie from 'cookie'
import axios from 'axios'
import cookie from 'js-cookie'

export const state = () => ({
    loadedPosts: [],
    token: null

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
    },

    setToken(state, token) {
      state.token = token
    },

    clearToken(state) {
      state.token = null
    }
}


export const actions = {//spread operator is used to pull out al data in an object, edit the object and pass back.
  //it gives access to every value in the object.
    nuxtServerInit({commit}, {req}) {
      const cookies = Cookie.parse(req.headers.cookie || '')
      commit('setToken', cookies['jwt'])
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

    addPost ({commit, state}, postData) {
      let createdPost = {
        ...postData,
        updatedDate: new Date()
      }
        return axios
          .post('https://nuxt-training-79a71.firebaseio.com/posts.json?auth=' + state.token, createdPost)
          .then((res) => {
            commit('addPost', { ...createdPost, id: res.data.name })
          })
          .catch(e => console.log(e))
    },
   

    editPost({commit, state}, editedPost) {
      axios.put('https://nuxt-training-79a71.firebaseio.com/posts/' + 
      editedPost.id + '.json?auth=' + state.token, editedPost)
      .then(() => {
        commit('editPost', editedPost)
      })
      .catch(e => console.log(e))

    },

    authenticateUser(vuexContext, authData) {
      let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB22tdfHYCEQIYGdom4mHwV7rCtwTPWi1s'
      if (!authData.isLogin) {
        authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB22tdfHYCEQIYGdom4mHwV7rCtwTPWi1s'
      }
      axios.post( authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(res => {
        console.log(res.data)
        vuexContext.commit('setToken',  res.data.idToken)

        localStorage.setItem('token', res.data.idToken)
        // localStorage.setItem('tokenExpiration', new Date().getTime() + res.data.expiresIn * 1000)
        //this enables you to store tokens within the browser to make it consistent
        cookie.set('jwt', res.data.idToken, {expires: 1})
        //also  its expiring date
        // cookie.set('expirationDate', new Date().getTime() + res.data.expiresIn * 1000)
        // vuexContext.dispatch('setLogoutTimer', res.data.expiresIn * 1000)
      })
      .catch(e => console.log(e))
    },

    initAuth(vuexContext, req) {
      let token
      // let expirationDate
      if (req) {
        if(!req.headers.cookie){
          return
        }
        // const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
        // if (!jwtCookie) {
        //   return
        // }
        token = jwtCookie.split('=')[1]
        // expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1]
      } else {
        token = localStorage.getItem('token')
        // expirationDate = localStorage.getItem('tokenExpiration')

        // if (new Date().getTime() > expirationDate || !token ) {
        //   return
        // }
      }
      // vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime() )
      vuexContext.commit('setToken', token)
    },

    onLogout({commit}) {
      commit('clearToken')
      cookie.remove('jwt')
      if (process.client) { //when we are no longer running on the server 
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
      }
    }
}


export const getters = {
    loadedPosts: state => state.loadedPosts,

    isAuthenticated: state => state.token != null
}