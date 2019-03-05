
export const state = () => ({
    loadedPosts: []

})

export const mutations = {
    setPosts(state, posts) {
    
        state.loadedPosts = posts
    }
}


export const actions = {
    nuxtServerInit({commit}) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit("setPosts", [
              {
                id: "1",
                title: "First Post",
                previewText: "This is our first post!",
                thumbnail:
                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is our second post!",
                thumbnail:
                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
              },
              {
                id: "3",
                title: "Third Post",
                previewText: "This is our Third post!",
                thumbnail:
                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
              }
            ])
            resolve()
          }, 1000)
        })
    },
}

export const getters = {
    loadedPosts: state => state.loadedPosts
}