<template>
  <v-app>
    <v-main>
      <app-auth/>
    </v-main>
  </v-app>
</template>

<script>
  import AppAuth from '../../components/Auth.component'

  export default {
    name: 'app-auth-view',

    components: {
      AppAuth
    },

    data: () => ({
      //
    })
  }
</script>
