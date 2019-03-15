<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <b-jumbotron class="container" header="Create An Acount" >
        <form @submit.prevent="onSubmit">
          <AppControlInput type="email" v-model="email"><h3>E-Mail Address</h3></AppControlInput>
          <AppControlInput type="password" v-model="password"><h3>Password</h3></AppControlInput>
          <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
          <AppButton
            type="button"
            btn-style="inverted"
            style="margin-left: 10px"
            @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
        </form>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/appControlInput'
import AppButton from '@/components/UI/appButton'
import axios from 'axios'


export default {
  name: 'adminAuthPage',

  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },

  components: {
    AppControlInput,
    AppButton
  },

  layout: 'blog',

  methods: {
    onSubmit () {
      this.$store.dispatch('authenticateUser', {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin
      }).then(() => {
        this.$router.push('/admin')
      })
    }
  }

}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  /* border: 1px solid rgb(89, 4, 247); */
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 500px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

