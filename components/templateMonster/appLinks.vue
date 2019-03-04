<template>
    <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">Play Game</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/blog">Nuxt-Blog</nuxt-link></li>
    </ul>

</template>

<script>

import Auth from '~/mixins/auth'
export default {
    mixins: [Auth]
}
</script>


<style scoped>

   
    .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .nav-item {
        margin: 0 10px;
    }
    .nav-item a {
        text-decoration: none;
        color: #fefefe;
    }
    .nav-item a:hover,
    .nav-item a:active{
        color: #f8eb34;
    }
    @media (max-width: 767px) {
        .nav-list {
            display: block;
        }
        .nav-item{
            margin-top: 16px;
            margin-bottom: 16px;
        }
    }
    @media (min-width: 768px) {
        .nav-list {
            display: flex;
        }
    }
</style>
