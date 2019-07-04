export const state = () => ({

//   loadedPosts: []

})

//mutations 
export const mutations = {
    
}

//actions 
export const actions = {
    async getPosts() {
        let res = await this.$axios.$get('/api/posts')
        commit('storePost', res)
    }
    
}

//getters
// export const getters = {
//     loadedPosts: state => state.loadedPosts
// }