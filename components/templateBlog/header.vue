<template>
  <div>
    <div>
      <b-navbar 
        toggleable="lg" 
        type="dark" 
        variant="primary">

        <b-navbar-brand href="/blog">Monster-Blog</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

          <b-collapse is-nav id="nav_collapse">
            <!--Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="/admin" >Blog Admin</b-nav-item>
              <b-nav-item href="/blogAbout" >About Blog</b-nav-item>
              <b-nav-item href="/posts" >Blog Post</b-nav-item>
              <b-nav-item href="/" >Monster-Slayer</b-nav-item>
            </b-navbar-nav> 
          </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>