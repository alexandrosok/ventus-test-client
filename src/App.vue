<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import AppAuth from './components/Auth.component'

  export default {
    name: 'App',
    components: {
      AppAuth
    },
    data: () => ({
      user: null
    }),
    beforeMount () {
      if (localStorage.getItem('user')) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/')
      }
    },
  }
</script>
