<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPosts.title }}</h1>
      <div class="post-details">
        <div class="post-detail">{{ loadedPosts.updatedTime }}</div>
        <div class="post-detail"> Written By:  {{ loadedPosts.author }}</div>
      </div>
      <p class="post-content">{{ loadedPosts.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
  </div>
</template>

<script>
export default {
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
            title: "First Post (ID: " + context.params.id + ")",
            author: 'Tochi',
            content: 'This the Content of The Post',
            updatedTime: new Date(),
            previewText: "Hi!, This is my first post!"
          }
        ]
      })
    }, 2000)
  }
}
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

