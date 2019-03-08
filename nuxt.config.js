const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#fa923f', 
    height: '4px', 
    duration: 5000 
  },

  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#fa923f',
  //   duration: 3000
  // },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
    to load some crazy functionalities, used to plug functionalities.
  */
  plugins: [
    //plugins can help in bring in global script that can be used in our app/single component
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    //modules allows you to add external packages which can be added into nuxt as modules.
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  router: {
    // extendRoutes (routes, resolve) {// it ensures that it routes pages back to the index.vue file as soon as  
    //   //we route to an unindentified page/component
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    // },
    linkActiveClass: 'active'
  },

  transistion: {
    //a means of using animations within the page
    name: 'page',
    mode: 'out-in'
  }
}
