<template>
  <div class="posts-page">
    <PostList :posts = "loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/postList'

export default {
  components: {
    PostList
  },

  layout: 'blog' ,
  
  
  asyncData: function (context, callback) {//it works asychronously by fetching data from the serve side before the page is even loaded
    //it only occurs(asyncData), when the page reloads or after routing to other pages and coming back to this page
    console.log(context);
    setTimeout(() => {// make sure to tell asyncdata is cancelled
      callback(null, {// the null value in the arg, is the value to be displayed if the data isn't found
        loadedPosts: [//this is loaded in server mode
          {
            id: "1",
            thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
            title: "First Post",
            previewText: "Hi!, This is my first post!"
          },
          {
            id: "2",
            thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
            title: "Second Post",
            previewText: "Hi!, This is my second post!"
          },
          {
            id: "3",
            thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
            title: "Third Post",
            previewText: "Hi!, This is my Third post!"
          }
        ]
      })
    }, 2000)
  }
}
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
