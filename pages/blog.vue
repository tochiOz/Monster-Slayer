<template>
  <div>
    <b-jumbotron class="shadow drop" header="Building Blog with Nuxt Routing Communication" lead="A Game built with vue.js, by which each feature/round of the web page move according to clicks and gives a log of the information" >
      <p>Get the latest tech news!!!!!</p>
      <b-btn variant="info" href="/postBlog">See More</b-btn>
      <PostList :posts =  "loadedPosts" />
    </b-jumbotron>
  </div>
</template>

<script>
import PostList from '@/components/Posts/postList'

export default {
  components: {
    PostList
  },

  layout: 'blog',

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
  .drop {
    background-image: url(https://avante.biz/wp-content/uploads/White-Wallpaper-Hd/White-Wallpaper-Hd-034.jpg);
  
  }
</style>

