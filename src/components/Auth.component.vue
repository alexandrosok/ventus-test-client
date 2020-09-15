<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined>
      <v-list-item three-line>
        <v-text-field
          label="Username"
          v-model="userData.username"
        ></v-text-field>
      </v-list-item>
      <v-list-item>
        <v-text-field
          label="Password"
          type="password"
          v-model="userData.password"
        ></v-text-field>
      </v-list-item>
      <v-card-actions>
        <v-btn @click="login" text>Log-In</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import AuthHttpService from '../services/Auth.service'

  export default {
    name: 'app-auth',
    data: () => ({
      userData: {
        username: null,
        password: null
      },
      AuthHttpService
    }),
    beforeMount () {
      this.AuthHttpService = new AuthHttpService(this.$http)
    },
    methods: {
      login () {
        this.AuthHttpService.Login(this.userData)
          .then((response) => {
            console.log(response)
            if (response.logged) {

              const d = new Date()
              d.setTime(d.getTime() + (9000000000))
              const expires = 'expires=' + d.toUTCString()
              document.cookie = 'jwt' + '=' + response.token + ';' + expires + ';'

              localStorage.setItem('user', JSON.stringify(response.user))
              localStorage.setItem('logged', true)
              this.$router.push('/dashboard')
            }
          })
      }
    }
  }
</script>
